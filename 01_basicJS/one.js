// const variable1 = "First"
// const variable2 = "Second"
// const variable3 = "Third"
// const variable4 = "Fourth"
// console.table([variable1, variable2, variable3, variable4])
// console.log(typeof variable1) // string
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined

// const var1 = 33
// const convertedVar1 = String(var1)
// console.log(convertedVar1)
// const getName = "arijitbiswas"
// console.log(getName.charAt(2))
// console.log(getName.indexOf("i"))
// const newString1 = getName.substring(1, 4)
// console.log(newString1)
// const newString2 = getName.slice(-9, 4)
// if indexStart < 0 then indexStart = max(indexStart + str.length, 0)
// if indexEnd < 0 then indexEnd = max(indexEnd + str.length, 0)
// console.log(newString2)
// const spacedName = "    arijitbiswas        "
// trim out starting and ending empty characters
// console.log(spacedName.trim())
// const url = "https://arijit%20biswas.com/arijit"
// console.log(url.replace("%20", "-"))
// console.log(url.includes("arijit"))
// const splitString = "ARIJIT-BISWAS-arijit-biswas"
// console.log(splitString.split("-"))

// const balance = 400.123456
// console.log(balance.toFixed(2))
// const hundreds = 100000000
// console.log(hundreds.toLocaleString("en-IN"))
// const minLimit = 10
// const maxLimit = 20
// console.log(Math.round(Math.random() * (maxLimit - minLimit + 1)) + minLimit)

// const customDate = new Date(2024, 2, 21, 24, 60, 60)
// console.log(customDate.toDateString())
// console.log(customDate.toLocaleDateString())
// console.log(customDate.toLocaleString())
// const customTime = new Date("03-21-2024")
// const currentTime = Date.now()
// console.log(currentTime - customTime.getTime())

// const myArr1 = [1, 2, 3, 4, 5]
// const mySliceArr = myArr1.slice(1, 3)
// console.log(myArr1)
// console.log(mySliceArr)
// const myArr2 = [1, 2, 3, 4, 5]
// const mySpliceArr = myArr2.splice(1, 3)
// console.log(myArr2)
// console.log(mySpliceArr)
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [6, 7, 8, 9, 0]
// const new_arr = [...arr1, ...arr2]
// console.log(new_arr)
// console.log(Array.from("Arijit"))
// const one = "one"
// const two = "two"
// const three = "three"
// console.log(Array.of(one, two, three))

// const mySymbol = Symbol("key1")
// const myObject = {
//     first_name: "Arijit",
//     last_name: "Biswas",
//     "full name": "Arijit Biswas",
//     [mySymbol]: "myKey1"
// }
// console.log(myObject.first_name)
// console.log(myObject["last_name"])
// console.log(myObject["full name"])
// console.log(myObject[mySymbol])
// myObject.first_name = "Hello"
// Object.freeze(myObject)
// myObject.first_name = "World"
// console.log(myObject.first_name)
// myObject.greeting1 = function () {
//     console.log("Hello World")
// }
// myObject.greeting2 = function () {
//     console.log(`Hello World ${this["full name"]}`)
// }
// console.log(myObject.greeting1())
// console.log(myObject.greeting2())
// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: "d" }
// const obj = { ...obj1, ...obj2 }
// console.log(obj)
// console.log(Object.keys(obj)) // to access all the keys of an object
// console.log(Object.values(obj)) // to access all the values of an object
// const newObject = {
//     first_name: "Arijit",
//     last_name: "Biswas",
//     "full name": "Arijit Biswas"
// }
// const { "full name": full_name } = newObject
// console.log(full_name)

// function loginMessage(name = "arijit") {
//     return `${name} is just logged in`
// }
// console.log(loginMessage())
// console.log(loginMessage("biswas"))
// function loginMessage(num1, num2, ...num) {
//     return num
// }
// console.log(loginMessage(100, 200, 300, 400, 500))
// addOne(1)
// function addOne(num) {
//     return num + 1
// }
// const addTwo = function (num) {
//     return num + 2
// }
// addTwo(1)
// console.log(this) // here it prints "{}" but in browser it prints "Window"
// function arijit() {
//     console.log(this)
// }
// arijit()
// // if we write the curly braces then we have to write the return statement
// const addThree = (num) => num + 3
// const objectReturn = () => ({ username: "arijit" })
// console.log(objectReturn())
// // Immediately Invoked Function Expressions (IIFE)
// ;(function chai() {
//     console.log("DB Connected")
// })()

// falsy values -> false, 0, -0, 0n, "", null, undefined, NaN
// truthy values -> "false", "0", " ", [], {}, function() {}
// // Nullish Coalescing Operator (??) : only works for -> null, undefined
// function f(name) {
//     name += " biswas"
//     console.log(name)
//     return null
// }
// let val = f("arijit") ?? "hello"
// console.log(val)

// const greeting = "hello"
// for (const greet of greeting) {
//     console.log(greet)
// }
// const map = new Map()
// map.set("In", "India")
// map.set("UK", "England")
// map.set("FR", "France")
// console.log(map)
// for (const [key, value] of map) {
//     console.log(key, "->", value)
// }
// const myObject = { js: "Javascript", kt: "Kotlin", cpp: "C++" }
// for (const key in myObject) {
//     console.log(key, "->", myObject[key])
// }
// const arr = ["js", "cpp", "rb", "py"]
// for (const key in arr) {
//     console.log(arr[key])
// }
// function print(item) {
//     console.log(item)
// }
// arr.forEach(print)
// arr.forEach((value, index, arr) => console.log(value, index, arr))
// const myCoding = [
//     { languageName: "Javascript", languageFileName: "js" },
//     { languageName: "Python", languageFileName: "py" },
//     { languageName: "C++", languageFileName: "cpp" },
//     { languageName: "Ruby", languageFileName: "rb" }
// ]
// myCoding.forEach((item) =>
//     console.log(item.languageName, ":", item.languageFileName)
// )
// const myNums = [1, 2, 3, 4, 5]
// const newNums = myNums.filter((item) => {
//     return item > 2
// })
// // const newNums = myNums.filter((item) => item > 2)
// console.log(newNums)
// const newNums = myNums.map((item) => item + 10)
// console.log(newNums)
// const newNums = myNums
//     .map((item) => item + 10)
//     .map((item) => item * 10)
//     .filter((item) => item > 130)
// console.log(newNums)
// first time accumulator takes initialValue and after that it takes currentValue in it
// const initialValue = 0
// const newNums = myNums.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue)
//     return accumulator + currentValue
// }, initialValue)
// console.log(newNums)
