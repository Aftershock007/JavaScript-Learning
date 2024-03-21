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
