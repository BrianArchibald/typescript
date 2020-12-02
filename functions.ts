function getSum(num1:number, num2:number):number{ // last number is the return value
    return num1 + num2;
}


function mySum(num1:any, num2:any):number{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        num1 = parseInt(num2);
    }
        return num1 + num2;
}

console.log(mySum('3', 5))


function getName(firstName:string, lastName?:string):string{ // ? makes it optional
    if(lastName == undefined){
        return firstName;
    }
    return firstName+' '+lastName;
}

function myVoid(): void{
    return;
}



