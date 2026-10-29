import { Cat } from "./cat";
import { PartianCat } from "./partianCat";

const cat: Cat = new Cat(4, "black");

cat.Color = "white";
cat.NumberOfLegs = 4;

console.log(cat.Color);
console.log(cat.NumberOfLegs);
cat.showDetails();

const partianCat: PartianCat = new PartianCat(3, "brown");

partianCat.NumberOfLegs = 4;
partianCat.Color = "gray";
partianCat.breed = "Siamese";

partianCat.showDetails();
partianCat.doMeowMeow();

