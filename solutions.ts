// Problem 1
function filterEvenNumbers  (arrayOfNumbers : number[]) : number [] {
    var arrayOfEvenNumbers: number[] = []
    
    arrayOfNumbers.forEach(element => {
        if (element % 2 == 0){
            arrayOfEvenNumbers.push(element)
        }
    });
    return arrayOfEvenNumbers
}

// Problem 2
function reverseString(string:string) : string {
    
    return string.split("").reverse().join("");

}

// Problem 3
type StringOrNumber = string | number | undefined
function checkType(value : StringOrNumber) : StringOrNumber{
    if (typeof value === "string"){
        return "String"
    }else if(typeof value === "number"){
        return "Number"
    }
}


// Problem 4
interface User{
    id: number;
    name: string;
    age: number
}

function getProperty <T extends User>(object : T, key: keyof User){

    if ( key in object ){
        return object[key]
    }
}

// Problem 5
interface Book{
  title: string,
  author: string,
  publishedYear: number
}

function toggleReadStatus(myBook: Book){
    var newObject = {...myBook, isRead: true}

    return newObject
}

// Problem 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

}

class Student extends Person {
    grade: string
    
    constructor(name: string, age: number, grade: string){
        super(name, age)
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7
type NumberArray = number[];
function getIntersection (numberOfArray1 : NumberArray, numberOfArray2 : NumberArray){
    const common = numberOfArray1.filter(item => numberOfArray2.includes(item));
    
    return common
}
