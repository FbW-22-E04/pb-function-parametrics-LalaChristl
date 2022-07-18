// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

function howManyArgs () {
console.log(arguments.length);


}

howManyArgs(); // -> 0
howManyArgs(1, false, "hello"); // -> 3
howManyArgs("better"); // -> 1
// howManyArgs(1, 3 , 5, 6, 7, 5, 2, 4, 4, 4, 5, 6)
