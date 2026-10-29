function greet(){
    return "Hello";
}

console.log(greet())
const fun = function(){
    return "Meow";
}

console.log(fun());

function sum (a,b){
    return a+b;
}

console.log(sum(10,20)); //Fatty/Normal function

const add = function add(a,b){
    return a+b;
}

console.log(add(10,20))

//Arrow function
//const arrowGreet()=>{
//    return "Hellw function"
//}

const arrowGreet = ()=> "Hello"

const summation=(a,b)=> a+b;

console.log(arrowGreet())
console.log(summation(10,20))

const withdraw = amount => {
    const balance = 3000;
    if (balance - amount >= 0) {
        return true;
    }
    else{
        return false;
    }
}

let withdrawStatus = withdraw (2000);
if (withdrawStatus) {
    console.log("Successful");
} else {
    console.log("Failed");
}

//Object 
const student = {
    id: "23-55028-3",
    name:"rahat",
    cgpa: 3.5,
    getName: function() {
        const objName = () => {
            return this.name;
        };
        return objName();
    }
}

student.dept = "CSE";
console.log(student.id);
console.log(student.name);
console.log(student.cgpa);
console.log(student.dept);

console.log (student ["id"]);
console.log (student.getName());


//array 

const numbers = [1, 2, 3, 4, 5];
 console.log(numbers);

 numbers.forEach (element => {
    console.log(element);
 });

const newNumbers = numbers.map(element => element * 5);
console.log(newNumbers);

const filteredNumbers = numbers.filter(element => element > 2);
console.log(filteredNumbers);

const value = numbers.reduce((sum, element) => sum + element, 0);
console.log(value);

 console.log (numbers.some (element => element > 4));
 console.log (numbers.every (element => element > 0));

 //array destructuring
 const arr2 = [10, 20, 30, 40];
 const [val1, val2, val3 , val4] = arr2;
  console.log(val1,val2,val3,val4);

  const person = {
    name: "rahat",
    age: 22,
    money : 5000,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
  }

  const {name:firstName, age:actualage, money:actualmoney,  address: {city:actualcity}} = person;
  console.log(firstName, actualage, actualmoney, actualcity);


  //sprad
 let arr3 = [10, 20, 30, 40, 50];
  function sub (a, b,c,d,e){
    return a-b-c-d-e;   
    }

    console.log(sub(...arr3));

    // Spread operator
    const newvalueArr = arr3;
    console.log(newvalueArr);

    const newValueArr = [...arr3];
    arr3.push(3000);
    console.log(newValueArr);

    const [v1, v2, ...rest] = arr3;
    console.log(v1, v2, rest);



    function  multiplication(...numbers){
        let mul = 1;
        for(let i = 0; i < numbers.length; i++){
            mul *= numbers[i];
        }
        return mul;
    }

    console.log(multiplication(10, 20, 30, 40, 50));

    //syncronous javascript

    console.log ("A");
    console.log ("B");
    console.log ("C");

    //asyncronous javascript

    console.log ("A");
    setTimeout(() => {
        console.log ("B");
    }, 5000);

    console.log ("C");


    const intervalId = setInterval(() => {
        console.log ("Hello");
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 12000);

    //promise

    const simulator = true;
    function getData() {
        if (simulator) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Data fetched successfully");
                }, 2000);
            });
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Failed to fetch data"));
            }, 2000);
        });
    }

    getData().then(resolveMsg => {  
        console.log(resolveMsg);
    }).catch(error => {
        console.error(error);
    }). finally (() => {
        console.log("Promise execution completed");
    });

    async function getUserData() {
        return { id: 30 };
}

    async function getUserDetails(userId) {
        const userResults = [
            { id: 30, result: "success" },
            { id: 31, result: "failed" }
        ];
        const user = userResults.find(item => item.id === userId);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
}

    async function execution() {
        try {
            const userData = await getUserData();
            const result = await getUserDetails(userData.id);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    execution();