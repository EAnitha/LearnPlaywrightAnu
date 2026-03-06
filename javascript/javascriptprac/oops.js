

// class student {


//     //variables and Methods 
// }

// const stu1 = new student()


//1. Encapsulation

//binding the data between the methods is called encapsulation 

// class employee{

//     employeename ;

//     employeePlace;
//     employeeid 

//     empdetails(empname, empplace, empid){

//        this.employeename = empname

//        this.employeePlace = empplace

//        this.employeeid = empid
//       // Set the data - setter method 
//     }

//     printMessage(){

//         console.log("This is a simple Method")
//     }

//     printGeetMessage(){

//         console.log("Hey HI")
//     }

//     printEmpDetails(){

//         console.log(this.employeename, this.employeePlace, this.employeeid)

//         // Getter Method 
//     }
// }

// const emp1 = new employee()

//  emp1.empdetails("Anitha", "Blr", "1234")

// // console.log(emp1.employeename)

// emp1.printEmpDetails()

//Camelcasing 

// usernameInput

// loginButton

//coding Principles 
// SOLID 
//YAGNI
//KISS
//DRY 


//2. Inhertance 

//  1. Single Inheritance 
//  2. Multilevel  
//  3. Multiple Inheritance - Not Suppoted 
//  4. Hirarchical Inheritance


// class A {

//     x = 20
//     y = 30

//     m1() {

//         console.log("This is Method 1")

//     }


//     m2() {

//         console.log("This is Method 2")

//     }



//     m3() {

//         console.log("This is Method 3")

//     }


// }


// class B extends A{

//     a = "Raju"
//     b = "G"


//     m4() {

//         console.log("This is Method 4")

//     }


//     m5() {

//         console.log("This is Method 5")

//     }


//     m6() {

//         console.log("This is Method 6")

//     }


// }

// class C extends A{

//     k = "Manoj"
//     l = "K"


//     m7() {

//         console.log("This is Method 7")

//     }

// }


// const obj = new C()

// console.log(obj.a)

// console.log(obj.x)

// obj.m1()

// obj.m5()
// obj.m7()

//3. Polymorphism

//   Methodoverriding 
//   MethodOverloading


// class A{

//     add(num1, num2){

//         console.log(num1+num2)
//     }

//     printMessage(){

//         console.log("This is a simple Method from  Parent")
//     }
// }


// class B extends A{

//     add(num1, num2, num3){

//         console.log(num1+num2+num3)
//     }

//     printMessage(){

//         console.log("This is a simple Method from  Child")
//     }
// }

// const obj2 = new A()

// // obj2.printMessage()  // Method Overriding 

// // obj2.add(4,8,9)  // Method Overriding 


// obj2.add(2,3,4)  // Method overloading 


// function printName(name){

//     console.log("Hey Hi " + name)
// }

// printName("Raju", "Rajendra")

// POM - Page Object Model 

// 4. Prototying 


class A {

    x = 20
    y = 30

    m1() {

        console.log("This is Method 1")

    }


    m2() {

        console.log("This is Method 2")

    }



    m3() {

        console.log("This is Method 3")

    }


}

A.prototype.z = 45


A.prototype.m4 = function (name){

     console.log("This is Method 4  " + name )
}

const raju = new A()

console.log(raju.z)

// const raju2 = new A()

// console.log(raju2.z)

raju.m4("Raju")


