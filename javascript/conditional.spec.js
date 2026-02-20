// if is used to execute a block of code if a specific condition is true. else is used to execute a block of code if the condition is false.


if (false) {
    console.log("Anu")
}
else {
    console.log("Ammu")

}
// else if  is used to specify a new condition to test if the first condition is false. we can have multiple elese if statements and an optioal else statement at the end.
if (false) {
    console.log(" Block 1")

}
else if (false) {
    console.log(" Block 2")

}
else if (false) {
    console.log(" Block 3")

}
else {
    console.log(" Block 4")

}
// switch is used to perform different actions based on different conditions. it is an alternate to multiple else if statements. it is more efficient and easier to read when we have multiple conditions to check.it uses strict equality operator (===) to compare the expression with the case values. if there is a match it will execute the block of code associated with that case and it will contain a default case which with execute if the expression does not match any of the case values. we can handle multiple cases together if the case values are same. we can also use break statement to exit the switch statement after execute the block of code for a case.
var stname = "Anu"
switch ("Anitha") {
    case "Anitha": {
        console.log("Hello anitha")
    }
        break;

    case "Ammu": {
        console.log("Hello Ammu")
    }
        break;
    default: {
        console.log("Hello Guest")
    }
}
switch (stname) {
    case "Anu": {
        console.log("Hello Anu")
    }
        break;

    case "Ammu": {
        console.log("Hello Ammu")
    }
        break;
    default: {
        console.log("Hello Guest")
    }
}