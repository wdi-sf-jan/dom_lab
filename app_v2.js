
// let's declare a variable groceries to be used inside multiple functions
  var groceries = document.getElementsByTagName("li");

// set up our functions to be called on page load
  function start(){
    changeText();
    changeBackgroundColor();
    changeListItems();
    resetEverything();
  }

// this function changes the text of the element with an ID of greeting
  function changeText(){
    document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
  }

// this function to changes the background color of all list items
  function changeBackgroundColor(){
    for (var i = 0; i < groceries.length; i++) {
      groceries[i].style.backgroundColor = "yellow";
    }
  }

// get the element with an ID of essentials (this is a ul) and run the changePicAndStrikeout when it is clicked
  function changeListItems(){
    var list = document.getElementById("essentials");
    list.addEventListener("click", changePicAndStrikeout);
  }

  // change the picture based on the text of the li and adds a strikethrough to the text
  function changePicAndStrikeout (event) {
    event.target.setAttribute("class", "selected");
    document.querySelector("img").setAttribute("src", "images/" + event.target.innerHTML + ".jpeg");
  }

  // get the element with an ID of reset (this is a button) and run the resetPicAndStyles when it is clicked
  function resetEverything() {
    var reset = document.getElementById("reset");
    reset.addEventListener("click", resetPicAndStyles);
  }
  // this loops through each list item and removes the class for each one.
  // it also resets the source of the img tag to panic.jpeg
  function resetPicAndStyles (event) {
    // Notice how I can reuse the groceries variable from above.
    for (var i = 0; i < groceries.length; i++) {
      groceries[i].setAttribute("class", "");
    }
    document.querySelector("img").setAttribute("src", "images/panic.jpeg");
  }

// get this party started - wait for the DOM to load, and then run the start function
  window.onload = start;