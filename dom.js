//createElement

// create a div
var newDiv = document.createElement("div");
//this will create a div element but it is not yet in the DOM.

// we can also set attributes, styles, or innerHTML to the new div ny using the properties of the element. The syntax is element.property = value
newDiv.className = "my-div";  //add a class to the div
newDiv.id = "my-div-id"; //add an id to the div

// we can also use the setAttribute method to set attributes, the syntax is element.setAttribute(attributeName, value)
newDiv.setAttribute('title', 'This is a div'); //add a title attribute to the div

//create a text node 
var newDivText = document.createTextNode("Hello, I am a new div!");
//

// append the text node to the div
newDiv.appendChild(newDivText);
// now the div has some content, but it is still not in the DOM. We can append it to an existing element in the DOM using the appendChild method. The syntax is parentElement.appendChild(newElement)

var container = document.querySelector("header .container"); 
var h1 = document.querySelector("header h1");

console.log(newDiv); 


container.insertBefore(newDiv, h1); 
// this will insert the new div before the h1 element in the container. Now the new div is part of the DOM and will be displayed on the page.

newDiv.style.backgroundColor = "lightblue"; 
// add some style to the new div