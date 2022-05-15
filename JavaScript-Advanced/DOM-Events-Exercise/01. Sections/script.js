function create(words) {
   let parentDiv = document.getElementById('content');

      words.forEach(element =>{ 
       let div =  document.createElement('div');
       let p = document.createElement('p');
       p.textContent = element;      
       p.style.display='none';
       div.appendChild(p);
       div.addEventListener('click' ,(ev)=>{
          p.style.display = 'block';           
       });
       parentDiv.appendChild(div);
      });
}