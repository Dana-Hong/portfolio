let width = document.querySelector(".logo");
var onresize = function() {
   //your code here
   //this is just an example
   width.innerText = document.body.clientWidth;
}
window.addEventListener("resize", onresize);

document.querySelector(".btn").addEventListener("click", (event) => {
   event.preventDefault();
})