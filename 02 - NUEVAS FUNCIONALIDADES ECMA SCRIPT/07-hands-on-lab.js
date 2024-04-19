class TicketManager {
    #priceBaseGain = 0.15;
    constructor(){
        this.events = []
    }

    addEvent(name, site, price, capacity = 50, date = new Date()){
        const event = {
            id: this.#getMaxId() + 1,
            name,
            site,
            capacity,
            price: price + this.#priceBaseGain,
            date,
            participants: []
        };
        this.events.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.events.map((event) => {
            if(event.id > maxId) maxId = event.id
        })
        return maxId;
    }

    getEvents(){
        return this.events;
    }

    addUser(idEvent, user){
        const event = this.#getEventById(idEvent);
        if(!event) return 'this event not exists'
        if(!event.participants.includes(user)) event.participants.push(user);
    }  
    
    #getEventById(idEvent){
        return this.events.find((event)=>event.id === idEvent)
    }

    eventTour(idEvent, newSite, newDate){
        const event = this.#getEventById(idEvent);
        if(!event) return 'this event not exists';
        const newEvent = {
            ...event,
            id: this.#getMaxId() + 1,
            site: newSite,
            date: newDate,
            participants: []
        };
        this.events.push(newEvent);
    }
};

const ticketManager = new TicketManager();

ticketManager.addEvent('Cosquin Rock', 'Córdoba', 500000);
ticketManager.addEvent('Boca vs. River', 'Córdoba', 44000, 456000);
ticketManager.addUser(1, 'Matias Contreras')
ticketManager.addUser(1, 'Simon Sola')
ticketManager.addUser(2, 'Maxi Dadurian')
console.log(ticketManager.addUser(3, 'Maxi Dadurian'))
ticketManager.eventTour(1, 'Corrientes', new Date('2024-05-18T00:08:30.441Z'))
console.log(ticketManager.getEvents());
