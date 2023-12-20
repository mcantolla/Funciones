const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const key = document.getElementById("key")
const key2 = document.getElementById("key2")

box1.addEventListener("click", function(){
    box1.style.backgroundColor = 'black'
})
box2.addEventListener("click", function(){
    box2.style.backgroundColor = 'black'
})
box3.addEventListener("click", function(){
    box3.style.backgroundColor = 'black'
})
box4.addEventListener("click", function(){
    box4.style.backgroundColor = 'black'
})

let color = "white"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink"
        key.style.backgroundColor = color
    } else if (event.key === 's') {
        color = "orange"
        key.style.backgroundColor = color
    } else if (event.key === 'd') {
        color = "lightblue"
        key.style.backgroundColor = color
    }
    })
    
let color2 = "white"

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        color = "purple"
        key2.style.backgroundColor = color
    } else if (event.key === 'w') {
        color = "grey"
        key2.style.backgroundColor = color
    } else if (event.key === 'e') {
        color = "brown"
        key2.style.backgroundColor = color
    }
    })
    