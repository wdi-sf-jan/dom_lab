// We need to wait for the page to have finished loading before we
// can try to operate on it. For instance,
// `document.getElementById("greeting")` won't work until the element
// with that ID has finished being rendered.
window.addEventListener("load", function () {

  // 1. Change the greeting from "Hello, World!" to "Hello, Planet Earth!"
  document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";

  // 2. Set the background color of each grocery to yellow.
  var groceries = document.getElementsByTagName("li");
  for (var i = 0; i < groceries.length; i++) {
    groceries[i].style.backgroundColor = "yellow";
  }

  // Add a click listener to the list of groceries.
  var list = document.getElementById("essentials");
  list.addEventListener("click", function (event) {
    // 3:
    // - `event.target` indicates which grocery was clicked.
    // - `setAttribute` is one way to change the class.
    //     - could also use `className` or `classList`.
    event.target.setAttribute("class", "selected");

    // 4:
    // - The `innerHTML` of the clicked element is grocery name.
    // - Change the src of the img to the corresponding photo.
    var food = "images/" + event.target.innerHTML + ".jpeg";
    document.querySelector("img").setAttribute("src", food);
  });

  // 5. Clicking the reset button removes the selected class from each
  // grocery and sets the image to be panic.jpeg.
  var reset = document.getElementById("reset");
  reset.addEventListener("click", function (event) {
    // Notice how I can reuse the groceries variable from above.
    for (var i = 0; i < groceries.length; i++) {
      groceries[i].setAttribute("class", "");
    }
    document.querySelector("img").setAttribute("src", "images/panic.jpeg");
  });
});
