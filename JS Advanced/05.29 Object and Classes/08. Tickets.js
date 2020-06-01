function solve(tickets,criteria)
{
    class Ticket 
    {
        constructor(travelInfo)
        {
            const [destination, price, status] = travelInfo.split("|");

            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        
    };

    const comparator = {
        destination: (a,b) => a.destination.localeCompare(b.destination),
        price: (a,b) => a - b,
        status: (a,b) => a.status.localeCompare(b.status),
    }

    

    return tickets.map(t => new Ticket(t)).sort(comparator[criteria]);

}


// let mapedTickets = tickets.map(t => new Ticket(t));

//     switch (criteria) {
//         case "destination":
//             mapedTickets = mapedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
//             break;
//         case "status":
//             mapedTickets = mapedTickets.sort((a, b) => a.status.localeCompare(b.status));
//             break;
//         case "price":
//             mapedTickets = mapedTickets.sort((a, b) => a.price - b.price);
//             break;

//         default:
//             break;
//     }

console.log(solve(
[
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'destination'
));

console.log();

solve(
[
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
],
'status'
)