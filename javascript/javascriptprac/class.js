


// // class 

// // constructor 

// // this

// // static 

// // function add(){
// //   console.log("erknb")

// // }


// // function substrct(){


// // }

// // function devide(){


// // }

// //functions inside a class we call as methods 

// // class classname{

// //     variables 

// //     methods 


// // }



// class calculator {


//     x = "Raju"

//     y = "Jnanoday"

//     printMessage(){

//         console.log("This is a simple method")
//     }
//     constructor(num1, num2) {

//         console.log(num1 + num2)
//     }

//     substrct(num1, num2) {
//         console.log(num1 - num2)

//     }


//     devide(num1, num2) {

//         console.log(num1 / num2)

//     }

// }


// // Instance of the class / Object of the class 

// const cal1 = new calculator(2,5)

// // cal1.add(4, 9)

// // cal1.devide(4,2)

// // console.log(cal1.x) // "Raju"




//  const cal2 = new calculator(34,35)

// // console.log(cal2.y ) // "Jnanoday"

// // cal2.add(34,78)

// // // constructor 

// // its a method 

// // Which automatically invoked 


//  const cal3 = new calculator(23,25)


class student {

    x = "Raju"  //non static varibale

    static y = "Madhu"  // static 

    m1() {

        console.log("This is method 1 ")

        this.m3()
    }

    static m2() {

        console.log("This is method 2 ")
    }

    m3() {

        console.log("This is method 3 ")
    }

    static m4() {

        console.log("This is method 4 ")

        this.m2()
    }

    m5() {

        console.log("This is method 5 ")


    }
}

const stu1 = new student()

stu1.m1()

console.log(student.y)


student.m4()

//OOPS  Supported JS 

// Encapsulation
// Ihertance 
     // Multiple Inheritance not supported 
// Polymorphism 
// Prototype 

//Not suppoted 
// Interfaces 
//Abstraction 


// callbacks 
// promises 
// Async await 

//============================
// topics to explore
// Sets 
// Maps
// Regular expressions 

// 100 % 
//================================================================

