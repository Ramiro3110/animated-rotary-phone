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
  /* Find the element by id */
  const element = document.getElementById("name");
  /* Change the "left" value of the element's style */
  element.style["left"] = event.pageX + "px"; /* x is given in "px" */
  alert(event.pageX + "px"); /* So we can see it */
}