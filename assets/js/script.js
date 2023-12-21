const ele = document.getElementById("ele1")

ele.addEventListener("click", function(){
    pintar("yellow")
})

const pintar = function(color){
    ele.style.backgroundColor = color
    }
pintar("green");