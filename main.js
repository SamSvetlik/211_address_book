let arrayOfUsers = []
let unorderedList = document.getElementById("unorderedList")

const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => arrayOfUsers.push((data.results[0])))
}
const logArray = () => {
    console.log(arrayOfUsers)
}

const listUsers = () => {
    arrayOfUsers.forEach((user) =>{
        let li = document.createElement("li")
        let name = user.name.first + " " + user.name.last
        let face = document.createElement("img")
        face.src = user.picture.medium
        // let details = document.createElement("button")
        // stuck adding a toggle for additional details - class?
        li.innerText = name
        unorderedList.appendChild(li)
        unorderedList.appendChild(face)
    } )
}
const getFirstUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => data.results.forEach(result => arrayOfUsers.push(result)))
}
window.addEventListener('load', getFirstUsers)