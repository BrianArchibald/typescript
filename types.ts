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

let stringNumberTuple: [string, number]

myString = 'This is the way too'
myNum = 22
myBool = true
myVar = 5

stringArray = ['Hello', 'World']
numArray = [3, 4]
boolArray = [true, false]

stringNumberTuple = ['Hello', 4];

let myVoid: void = null; // void can be null or undefined
let myNull: null; // can be null or undefined
let myUndefined: undefined = null; // can be null or undefined

console.log(myString, myNum)

