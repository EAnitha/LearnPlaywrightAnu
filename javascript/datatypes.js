// datatypes are 2 types
// primitive datatypes are number, string, boolean, undefined, null these are immutable and can store only one value and do not have property and methods
// non primitive data types are object and array these are mutable and can store multiple values and have property and methods 


// Number
  var x = 5
console.log(typeof(x))
 console.log(x)

x = 10.0
console.log(typeof(x))

console.log(x)
x = 12345567789900567787
console.log(typeof(x))

console.log(x)

// string

var strname = "anitha"
console.log(strname)
var strname = 'Ammu'
console.log(strname)
var strname = `Ani`
console.log(strname)
 console.log(typeof(strname))
console.log(strname)
// boolean
var istrue = true
console.log(typeof(istrue))
console.log(istrue)

// undefined
var y
console.log(typeof(y))
console.log(y)
var y1 = undefined
console.log(typeof(y1))

// null
var z = null
console.log(typeof(z))
console.log(z) // null is an object

// object
var person = {
    name : "Anu",
    age : 22
}


console.log(typeof(person))
console.log(person)
console.log(person.name)
console.log(person.age)

// array
var arr = [1,2,3,4,5]
console.log(typeof(arr))
console.log(arr[3])
console.log(arr.length)
