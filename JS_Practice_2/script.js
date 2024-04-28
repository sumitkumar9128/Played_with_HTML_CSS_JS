var btn = document.querySelector("#add")
var h = document.querySelector("h4")
flag = 0;

btn.addEventListener("click",function(){
    if(flag==0){  
    h.innerHTML = "Friends Now"
    h.style.color = "green"
    btn.innerHTML = "Remove Friend"
    btn.style.backgroundColor = "red"
    console.log("hey thank you to being friends")
    flag = 1
}else{
    h.innerHTML = "Stranger Now"
    h.style.color = "red"
    btn.innerHTML = "Add Friend"
    btn.style.backgroundColor = "green"
    console.log("why u done this")
    flag = 0


}
 
})