import { Car } from "../model/Car";
import { Buyer } from "../model/Buyer";

export const defaultCar: Car = new Car("Default Brand");

export const defaultBuyer: Buyer = {
    buyerId: 0,
    name: "Default Buyer",
    email: "default@example.com",
    phone: "000-000-0000",
};
