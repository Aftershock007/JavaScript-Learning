// const parentClass = document.querySelector(".parent")
// console.log(parentClass)
// console.log(parentClass.children)
// const myArr = Array.from(parentClass.children)
// console.log(myArr[1].innerText)
// myArr.map((item) => console.log(item.innerHTML))
// parentClass.children[1].style.color = "blue"
// console.log(parentClass.firstElementChild)
// console.log(parentClass.lastElementChild)
// const dayOne = document.querySelector(".day")
// console.log(dayOne)
// console.log(dayOne.parentElement)
// console.log(dayOne.nextElementSibling)

// const div = document.createElement("div")
// div.id = Math.round(Math.random() * 10 + 1)
// div.className = "main"
// div.setAttribute("title", "generated title")
// div.style.color = "blue"
// // first way
// // div.innerHTML = "Arijit Biswas"
// // second way
// const addText = document.createTextNode("Arijit Biswas")
// div.appendChild(addText)
// document.body.appendChild(div)
// // CREATE
// function addLanguage(langName) {
//     const li = document.createElement("li")
//     li.innerHTML = langName
//     document.querySelector(".language").appendChild(li)
// }
// addLanguage("Python")
// function addOptimizedLanguage(langName) {
//     const li = document.createElement("li")
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector(".language").appendChild(li)
// }
// addOptimizedLanguage("Rust")
// // UPDATE
// const updateLang = document.querySelector("li:nth-child(1)")
// const newLi = document.createElement("li")
// newLi.appendChild(document.createTextNode("Cpp"))
// updateLang.replaceWith(newLi)
// console.log(document.querySelector(".language"))
// // DELETE
// const deleteLang = document.querySelector("li:last-child")
// deleteLang.remove()

// const firstElement = document.getElementById("Javascript")
// const secondElement = document.getElementById("Python")
// firstElement.onclick = () => alert("Clicked")
// firstElement.addEventListener("click", (e) => console.log(e), false)
// secondElement.addEventListener(
//     "click",
//     (e) => {
//         e.preventDefault()
//         e.stopPropagation()
//         console.log(e)
//     },
//     false
// )
// document.querySelector("#images").addEventListener("click", (e) => {
//     if (e.target.tagName === "IMG") {
//         const removeLi = e.target.parentNode
//         removeLi.remove()
//     }
// })

// const changeText = setTimeout(() => {
//     document.querySelector("li").innerHTML = "Python"
// }, 3000)
// const button = document.getElementById("stop")
// document.addEventListener("click", (e) => {
//     console.log("Text change stopped")
//     clearTimeout(changeText)
// })
// const randomColor = () => {
//     const hexCode = "0123456789ABCDEF"
//     let hexColor = "#"
//     for (let i = 0; i < 6; i++) {
//         hexColor += hexCode[Math.floor(Math.random() * 16)]
//     }
//     return hexColor
// }
// let startInterval = null
// document.getElementById("start").addEventListener("click", () => {
//     if (!startInterval) {
//         startInterval = setInterval(() => {
//             document.querySelector("li").innerHTML = randomColor()
//         }, 1000)
//     }
// })
// document.getElementById("stop").addEventListener("click", () => {
//     if (startInterval) {
//         clearInterval(startInterval)
//         startInterval = null
//     }
// })

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task is completed")
//         resolve()
//     }, 2000)
// })
// promiseOne.then(() => {
//     console.log("Promise consumed")
// })
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const userObject = {
//             username: "arijit",
//             age: 22
//         }
//         resolve(userObject)
//     }, 1000)
// }).then((userObjectReceived) => {
//     console.log(userObjectReceived)
// })
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false
//         const userObject = {
//             username: "Arijit",
//             age: 22
//         }
//         const errorObject = {
//             errorMessage: "ErrorMessage"
//         }
//         if (!error) resolve(userObject)
//         else reject(errorObject)
//     }, 1000)
// })
//     .then((userObjectReceived) => {
//         return userObjectReceived.username
//     })
//     .then((userNameReceived) => {
//         console.log(userNameReceived)
//     })
//     .catch((error) => {
//         console.log(error.errorMessage)
//     })
//     .finally(() => console.log("Finally"))
// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true
//         const userObject = {
//             username: "Arijit",
//             password: "Biswas"
//         }
//         const errorObject = {
//             errorMessage: "ErrorMessage"
//         }
//         if (!error) resolve(userObject)
//         else reject(errorObject)
//     }, 1000)
// })
// async function consumedPromise() {
//     try {
//         const response = await newPromise
//         console.log(response)
//     } catch (error) {
//         console.log(error.errorMessage)
//     }
// }
// consumedPromise()

// fetch("https://fakestoreapi.com/products/1")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
