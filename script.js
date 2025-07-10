function hello() {
    alert("Hello, world!")
}

function hello() {
    alert("Hello, world!")
}

document.addEventListener('click', hello);
/* "document" refers the website, 
   "click" to what you do, 
   "hello" to what JavaScript does. */

   function hello(event) {
    alert(event)
}

document.addEventListener('click', hello);

function hello(event) {
  alert(event.pageX)
}