import { Client } from "../client.interface";

export interface GetClients {
    clients:    Client[];
    totalPages: number;
}
