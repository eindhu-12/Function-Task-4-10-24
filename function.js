// Write a function add(a, b) that takes two numbers a and b as arguments and returns their sum.
console.log("question-1");

function add(a,b){
    console.log(a+b);   
}
add(30,20)

// Write a function subtract(a, b) that returns the result of subtracting b from a.
console.log("question-2");

function sub(c,d){
    console.log(c-d);   
}
sub(30,20)
// Write a function multiply(a, b) that takes two numbers and returns their product.
console.log("question-3");

function div(e,f){
    console.log(e/f);   
}
div(40,20)
// Write a function divide(a, b) that returns the result of dividing a by b. If b is zero, the function should return a message saying "Cannot divide by zero."
console.log("question-4");

function divide(x,y){
    if(y==0){
        console.log("Cannot divide by zero");
    }
    else{
        console.log(x/y);
        
    }
}
divide(50,2)
