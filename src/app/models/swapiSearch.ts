import{SwPeople} from './SwPeople';

export interface swapiSearch{
    count : number;
    next : string;
    previous :string;
    results : SwPeople[];

}