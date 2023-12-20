const ele = document.getElementById("ele1")

ele.addEventListener("click", function(){
    ele.style.backgroundColor = 'yellow'
})

pintar = function(color){
    ele.style.backgroundColor = color
    }
pintar("green");