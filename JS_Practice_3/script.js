var conn = document.querySelector(".container")
var heart = document.querySelector("i")

conn.addEventListener("dblclick",function(){
 heart.style.transform = "translate(-50%, -50%) scale(1)"
 heart.style.opacity = 0.9
 heart.style.color = "red"

 setTimeout(() => {
    heart.style.opacity = 0;
 }, 2000);
 setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)"
 }, 4000);
})

