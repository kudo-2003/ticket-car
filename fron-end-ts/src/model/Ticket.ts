import { Car } from './Car';
import { Buyer } from './Buyer';

export interface Ticket {
    ticketId: number;
    passengerName: string;
    travelDate: Date;
    departure: string;
    destination: string;
    price: number;
    car: Car;
    buyer: Buyer;
}
