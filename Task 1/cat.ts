export class Cat {
    private _numberOfLegs: number;
    private _color: string;

    constructor(numberOfLegs: number, color: string) {
        this._numberOfLegs = numberOfLegs;
        this._color = color;
    }

    get NumberOfLegs(): number {
        return this._numberOfLegs;
    }

    set NumberOfLegs(value: number) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("NumberOfLegs must be a non-negative integer.");
        }
        this._numberOfLegs = value;
    }

    get Color(): string {
        return this._color;
    }

    set Color(value: string) {
        this._color = value;
    }

    showDetails(): void {
        console.log(`Color: ${this.Color}, Number of legs: ${this.NumberOfLegs}`);
    }
}