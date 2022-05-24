function tickets(ticketDescriptions,sortCriterion) {
    let sortedTickets = [];

    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = Number(price);
            this.status=status;
        }
    }

    for (const ticketDecsription of ticketDescriptions) {
        let[destination,price,status] = ticketDecsription.split('|');
        let ticket = new Ticket(destination,price,status);
        sortedTickets.push(ticket);
    }

    return sortCriterion === 'price' ?sortedTickets.sort((a, b) => a[sortCriterion] - b[sortCriterion]) : sortedTickets.sort((a, b) => a[sortCriterion].localeCompare(b[sortCriterion]));
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')
