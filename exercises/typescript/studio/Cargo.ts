import { Payload } from './Payload';


export class Cargo implements Payload { 
    massKg:number
    material:string

    Constructor(massKg:number, material:string){
        this.massKg = massKg
        this.material = material
    }

}