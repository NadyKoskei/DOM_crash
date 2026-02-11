
// onclick event handler for the button
function buttonClick() {
console.log("Button was clicked! function");
}

// addEventListener for the button
var button = document.getElementById("button3").addEventListener('click', function() {
  console.log("Button was clicked! addEventListener");
});

// addEventListener for the button with an already named function
var button = document.getElementById("button3").addEventListener('click', buttonClick);

//using onclikc to change styles and content
var button = document.getElementById("button1").addEventListener('click', buttonClick2);

function buttonClick2() {
  document.getElementById("button1").style.backgroundColor = "red";

  document.querySelector("#button1").textContent = "Clicked!";
}

// using the event object to get more information about the event

function buttonClick3(e) {
  //console.log(e);
  console.log(e.target); // the element that triggered the event
  console.log(e.target.id); // the id of the element that triggered the event

  console.log(e.type); // the type of event that was triggered

  console.log(e.clientX); // the x coordinate of the mouse when the event was triggered relative to the viewport

  console.log(e.clientY); // the y coordinate of the mouse when the event was triggered relative to the viewport

  console.log(e.offsetX); // the x coordinate of the mouse relative to the target element when the event was triggered
  console.log(e.offsetY); // the y coordinate of the mouse relative to the target element when the event was triggered

  console.log(e.altKey); // true if the alt key was pressed when the event was triggered
  console.log(e.ctrlKey); // true if the ctrl key was pressed when the event was triggered
  console.log(e.shiftKey); // true if the shift key was pressed when the event was triggered
}

var button = document.getElementById("button2").addEventListener('click', buttonClick3);

