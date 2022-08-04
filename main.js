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
        li.innerText = name
        unorderedList.appendChild(li)

        let face = document.createElement("img")
        face.src = user.picture.medium
        unorderedList.appendChild(face)

        let detailsBtn = document.createElement("button")
        detailsBtn.innerText = "Show more details"
        detailsBtn.addEventListener("click",() => {
            let h3 = document.createElement("h3")
            let details = "Nationality: " + user.nat + ", Age: " + user.dob.age + ", Email: " + user.email
            h3.innerText = details
            detailsBtn.innerText = ""
            detailsBtn.appendChild(h3)    
            // Button turns into additional details
            // It's kinda like a dropdown menu
            // Janky but functional
            })
        unorderedList.appendChild(detailsBtn)
        
    } )
}
const getFirstUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => data.results.forEach(result => arrayOfUsers.push(result)))
}
window.addEventListener('load', getFirstUsers)