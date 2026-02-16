
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

var button = document.getElementById("button2").addEventListener('click', buttonClick3);


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


//mouse events

var button = document.getElementById("button4");

button.addEventListener('click', runEvent); // this will run the runEvent function every time the button is clicked

button.addEventListener('dblclick', runEvent); // this will run the runEvent function every time the button is double clicked

button.addEventListener('mousedown', runEvent); // this will run the runEvent function every time the mouse button is pressed down on the button

button.addEventListener('mouseup', runEvent); // this will run the runEvent function every time the mouse button is released on the button

//e.type will give us the type of event that was triggered, so we can use the same function for multiple events and still know which event was triggered
function runEvent(e) {
  console.log('EVENT TYPE: ' + e.type);
}

var box = document.getElementById("box");

box.addEventListener('mouseenter', runEvent); // this will run the runEvent function every time the mouse enters the box

box.addEventListener('mouseleave', runEvent); // this will run the runEvent function every time the mouse leaves the box

box.addEventListener('mouseover', runEvent); // this will run the runEvent function every time the mouse is over the box
box.addEventListener('mouseout', runEvent); // this will run the runEvent function every time the mouse is out of the box

//NB mouseentr and mouseover are similar but mouseover will also trigger when the mouse enters a child element of the box, while mouseenter will only trigger when the mouse enters the box (element) itself. The same applies to mouseout and mouseleave.

box.addEventListener('mousemove', runEvent); // this will run the runEvent function every time the mouse is moved within the box

function runEvent(e) {
  console.log('EVENT TYPE: ' + e.type); 

// output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"; 
// this will change the background color of the box based on the mouse position within the box
}
