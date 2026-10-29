import { Cat } from "./cat";

export class PartianCat extends Cat {
    public breed: string;

    constructor(numberOfLegs: number, color: string, breed = "Partian") {
        super(numberOfLegs, color);
        this.breed = breed;
    }

    doMeowMeow(): void {
        console.log("Meow meow!");
    }

    override showDetails(): void {
        console.log(
            `Breed: ${this.breed}, Color: ${this.Color}, Number of legs: ${this.NumberOfLegs}`
        );
    }
}