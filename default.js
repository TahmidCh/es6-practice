function add(num1, num2) {
    num2= num2 || 0;
    return num1+num2;
}

// If num2 is not provided
const total= add(15);
console.log(total);

// or we can also do this
function add2(num1, num2 = 20) {
    return num1+num2;
}

// in this case id num2 is not provided it will take dafault value 20