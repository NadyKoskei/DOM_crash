
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
//this line of code changes the text content of the last child element of itemList to "Hello 4". This will affect the text displayed in the last <li> element within the element with id "items".


