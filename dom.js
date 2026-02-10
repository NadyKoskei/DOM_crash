
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
