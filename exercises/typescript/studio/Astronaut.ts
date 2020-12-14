import { Payload } from './Payload';


export class Astronaut implements Payload {
    massKg:number
    name:string

    Constructor(massKg:number, name: string){
        this.massKg = massKg
        this.name = name 
    }

}