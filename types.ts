// use tsc types.ts to compile to js file
// use tsc types.ts -w    for watch mode to compile automatically on changes

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let stringArray: string[];
let numArray: number[];
let boolArray: boolean[];

// or

// let stringArray: Array<string>;
// let numArray: Array<number>;
// let boolArray: Array<boolean>;

myString = 'This is the way too'
myNum = 22
myBool = true
myVar = 5

stringArray = ['Hello', 'World']
numArray = [3, 4]
boolArray = [true, false]

console.log(myString, myNum)

