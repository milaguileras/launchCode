import { Payload } from "./Payload"
import { Astronauts } from "./Astronauts"
import { Cargo } from "./Cargo"



class Rocket{
    name:string
    totalCapacityKg:number
    cargoItems:Cargo[] = []
    astronauts:Astronauts[] = []

    Constructor(name:string, totalCapacityKg:number){
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }
    sumMass(items: Payload[]): number {
        let totalMass : number = 0;
        for (let i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
    }
    return totalMass
    }
    currentMassKg():number{
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems)
    }
}