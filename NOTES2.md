3. TRAVERSING THE DOM

// parentNode
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
//is used to get the parent of the specified element. In this case, it will return the parent element of the element with the id "items", which is the <div> element with id main.

itemList.parentNode.style.backgroundColor = '#f4f4f4';
//this line of code changes the background color of the parent element of itemList to a light gray color (#f4f4f4). This will affect the appearance of the parent element, which is the <div> element with id main.

// parentElement
var itemList2 = document.querySelector('#items2');
console.log(itemList2.parentElement);
//is used to get the parent element of the specified element. In this case, it will return the parent element of the element with the id "items2", which is the <div> element with id main2.

itemList2.parentElement.style.fontStyle = 'italic';
//this will change the font style of all the text in the parent element of itemList2 from normal to italics. NB that it affects the content inside the element with id main2.

//childNodes
console.log(itemList.childNodes);
//is used to get a collection of all child nodes of the specified element, including text nodes and comment nodes. In this case, it will return a NodeList of all child nodes of the element with the id "items", which includes text nodes (like whitespace) and element nodes (like <li> elements).

//children
console.log(itemList.children);
//is used to get a collection of all child elements of the specified element, excluding text nodes and comment nodes. In this case, it will return an HTMLCollection of all child elements of the element with the id "items", which includes only the <li> elements and excludes any text nodes (like whitespace).

//firstChild
console.log(itemList.firstChild);
//is used to get the first child node of the specified element, which can be a text node, an element node, or a comment node. In this case, it will return the first child node of the element with the id "items", which is likely to be a text node (like whitespace) if there is any whitespace before the first <li> element.

//firstElementChild
console.log(itemList.firstElementChild);
//is used to get the first child element of the specified element, excluding text nodes and comment nodes. In this case, it will return the first child element of the element with the id "items", which is the first <li> element.
itemList.firstElementChild.textContent = 'Hello 1';
//this line of code changes the text content of the first child element of itemList to "Hello 1". This will affect the text displayed in the first <li> element within the element with id "items".

//lastChild
console.log(itemList.lastChild);
//is used to get the last child node of the specified element, which can be a text node, an element node, or a comment node. In this case, it will return the last child node of the element with the id "items", which is likely to be a text node (like whitespace) if there is any whitespace after the last <li> element.

//lastElementChild
console.log(itemList.lastElementChild);
//is used to get the last child element of the specified element, excluding text nodes and comment nodes. In this case, it will return the last child element of the element with the id "items", which is the last <li> element.
itemList.lastElementChild.textContent = 'Hello 4';
//this changes the text content of the last child element of itemList to "Hello 4". This will affect the text displayed in the last <li> element within the element with id "items".

//nextSibling
console.log(itemList2.nextSibling);
//this is used to get the next sibling node of the specified element (itemList2). It will return the next sibling node, which can be a text node, an element node, or a comment node. In this case, it will likely return a text node (like whitespace) if there is any whitespace after the element with id "items2".

//nextElementSibling
console.log(itemList2.nextElementSibling);
//this is used to get the next sibling element of the specified element (itemList2), excluding text nodes and comment nodes. It will return the next sibling element, which is the next HTML element that follows itemList2 in the DOM. In this case, it will return the next sibling element after the element with id "items2", which could be another HTML element if it exists.

//previousSibling
console.log(itemList2.previousSibling);
//this is used to get the previous sibling node of the specified element (itemList2). It will return the previous sibling node, which can be a text node, an element node, or a comment node. In this case, it will likely return a text node (like whitespace) if there is any whitespace before the element with id "items2".

//previousElementSibling
console.log(itemList2.previousElementSibling);
//this is used to get the previous sibling element of the specified element (itemList2), excluding text nodes and comment nodes. It will return the previous sibling element, which is the previous HTML element that precedes itemList2 in the DOM. In this case, it will return the previous sibling element before the element with id "items2", which could be another HTML element if it exists.
itemList2.previousElementSibling.style.color = 'red';
//this line of code changes the text color of the previous sibling element of itemList2 to red. This will affect the appearance of the previous sibling element, which is the HTML element that precedes itemList2 in the DOM.

4.CREATING NEW

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