import { Country } from "./country.interface";

export interface Client {
    id:      number;
    name:    string;
    phone:   string;
    email:   string;
    country: Country;
}


