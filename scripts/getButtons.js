export default function getBut() {
    let canvas = document.getElementById("canvasTest");
    canvas.addEventListener("click", sayHi, false);

   function sayHi () {
       console.log("Canvas element was clicked!");
   }
 }

     
    