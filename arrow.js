// first way of declaring function
function doubleIt(num) {
    return num*2
}

// second way
const thripleIt = function (num) {
    return num*3
}

// es6 method
const fourfolIt = num => num*4;
const result= fourfolIt(12);
console.log(result);

const add =(num1,num2) => num1+num2;
const total= add(55,45);
console.log(total);

const bishal= (num1,num2)=>{
    const diff=num1-num2;
    const sum= num1+num2;
    const result= diff*sum;
    return result
}

const bishalerResult= bishal(15,10);
console.log(bishalerResult);