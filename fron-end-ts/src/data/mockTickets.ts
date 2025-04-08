import { Ticket } from "../model/Ticket";
import { Car } from "../model/Car";
import { Buyer } from "../model/Buyer";

const defaultCar: Car = new Car("Default Brand");
const defaultBuyer: Buyer = {
    buyerId: 0,
    name: "Default Buyer",
    email: "default@example.com",
    phone: "000-000-0000",
};

export const mockTickets: Ticket[] = [
    {
        ticketId: 1,
        passengerName: "John Doe",
        travelDate: new Date("2023-10-01"),
        departure: "City A",
        destination: "City B",
        price: 50,
        car: defaultCar,
        buyer: defaultBuyer,
    },
    {
        ticketId: 2,
        passengerName: "Jane Smith",
        travelDate: new Date("2023-10-02"),
        departure: "City C",
        destination: "City D",
        price: 60,
        car: defaultCar,
        buyer: defaultBuyer,
    },
];
