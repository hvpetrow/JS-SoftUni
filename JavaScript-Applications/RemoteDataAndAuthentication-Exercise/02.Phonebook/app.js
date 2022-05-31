function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click',loadContacts);
    document.getElementById('btnCreate').addEventListener('click',createContact);
}

const contactList = document.getElementById('phonebook');

attachEvents();

async function loadContacts(){
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const data = await res.json();

    const contacts = Object.values(data);

    for (const contact of contacts) {
        const liElement = document.createElement('li');
        liElement.textContent = `${contact.person}: ${contact.phone}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click',async(e)=>{
            const url = `http://localhost:3030/jsonstore/phonebook/${contact._id}`;
            const deleteOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    person: contact.person,
                    phone: contact.phone
                })
            };

            const res = await fetch(url,deleteOptions);
            const deletedContact = await res.json();
            contactList.innerHTML = '';
            loadContacts();
        });

        liElement.appendChild(deleteBtn);
        contactList.appendChild(liElement);
    }
}

async function createContact(){
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const contact = {
        person: person.value,
        phone: phone.value
    };

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(contact)
    };

    const res = await fetch(url,options);
    const createdContact = await res.json();

        const liElement = document.createElement('li');
        liElement.textContent = `${person.value}: ${phone.value}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click',async(e)=>{
            const url = `http://localhost:3030/jsonstore/phonebook/${createdContact._id}`;
            const deleteOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    person: createdContact.person,
                    phone: createdContact.phone
                })
            };

            const res = await fetch(url,deleteOptions);
            const deletedContact = await res.json();
            contactList.innerHTML = '';       
            loadContacts();
        });

        liElement.appendChild(deleteBtn);
        contactList.appendChild(liElement);

        person.value = '';
        phone.value = '';
}

