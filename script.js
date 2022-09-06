const counter = document.querySelector(".count");
const subtract = document.querySelector(".btn-subtract");
const add = document.querySelector(".btn-add");
const reset = document.querySelector(".btn-reset");

add.addEventListener("click", function(){
    counter.innerHTML++;
    counter.style.borderColor = "green"
})
subtract.addEventListener("click", function(){
    counter.innerHTML--;
    counter.style.borderColor = "red" 
})
reset.addEventListener("click", function(){
    counter.innerHTML = "0";
    counter.style.borderColor = "white" 
})


