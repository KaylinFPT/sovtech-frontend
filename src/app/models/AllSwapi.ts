import { SwPeople } from "./SwPeople";

export interface AllSwapi {
    count : number;
    next : string;
    previous : string;
    results : SwPeople[];
}