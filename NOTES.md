1.EXAMINE THE DOCUMENT OBJECT

console.dir(document);
// the document object is the root of the DOM tree. It represents the entire HTML document. By using console.dir(), we can see all the properties and methods of the document object in a more readable format. This allows us to explore and manipulate the DOM effectively.

//we use the . dot synatx to access properties and methods of the document object.

console.log(document.domain);
// The document.domain property returns the domain name of the web page. It is useful for security purposes and for determining the origin of the document.

console.log(document.URL);
// The document.URL property returns the complete URL of the current web page. It includes the protocol (http or https), the domain, and any path or query parameters.

console.log(document.title);
// The document.title property returns the title of the web page, which is defined in the <title> tag of the HTML document.

//NB.. It is not read only.We can use these properties and methods to manipulate the content, structure, and style of the web page dynamically.

document.title = "DOM Crash Course";
// By assigning a new value to document.title, we can change the title of the web page. In this case, we are setting it to "DOM Crash Course". When this code is executed, the title of the page will be updated accordingly.  

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.querySelectorAll('*')); 
//console.log(document.all); is an alternative to querySelectorAll('*') but it is not recommended to use it as it is not a standard method and may not work in all browsers. It returns a collection of all the elements in the document, but it does not provide the same level of functionality and flexibility as querySelectorAll.
// The document.all property returns a collection of all the elements in the document. It is an array-like object that allows us to access and manipulate any element in the DOM. However, it is generally recommended to use other methods like getElementById or querySelector for better performance and readability.  

console.log(document.all[9]);
// The document.all[9] expression accesses the 10th element in the collection of all elements in the document. It returns the element at index 9, which is the 10th element since the index starts at 0. This allows us to access and manipulate specific elements in the DOM based on their position in the document.

document.all[9].textContent = "Hello";
// By assigning a new value to document.all[9].textContent, we can change the text content of the 10th element in the document. In this case, we are setting it to "Hello". When this code is executed, the text content of that specific element will be updated accordingly.

//NB.. It is generally recommended to use more specific methods like getElementById or querySelector to access and manipulate elements in the DOM, rather than relying on the document.all collection, as it can lead to performance issues and may not work consistently across different browsers.
//also using the index to access elements can be unreliable as the structure of the document may change, causing the index to point to a different element. It is better to use more specific selectors or methods to target elements in the DOM for better maintainability and readability of the code.

console.log(document.forms);
// The document.forms property returns a collection of all the <form> elements in the document. It allows us to access and manipulate forms in the DOM. We can use this property to retrieve information about the forms, such as their names, IDs, and input fields, and to perform actions like submitting or resetting forms programmatically.

2. SELECTING METHODS

a) GETELEMENTBYID

console.log(document.getElementById("header-title"));
//this will return the element with the id of header-title

var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
//this will return the element with the id of header-title and store it in a variable called headerTitle

headerTitle.textContent = "Hello World";
//this will change the text content of the element with the id of header-title to Hello World

headerTitle.innerText = "Goodbye World";
//this will change the inner text of the element with the id of header-title to Goodbye World

console.log(headerTitle.textContent);
//this will return the text content of the element with the id of header-title without any formatting, disregarding the styles applied to the element.

console.log(headerTitle.innerText);
//this will return the inner text of the element with the id of header-title with respect to the formatting of the element.. including styles applied to the element. for example if the element is hidden with display:none then it will not return the text content of the element but if the element is visible then it will return the text content of the element

headerTitle.innerHTML = "<h3>Hello World</h3>";
//this will change the inner HTML of the element with the id of header-title to <h3>Hello World</h3> which will render as Hello World in an h3 tag.
//innerHTML allows you to insert HTML code into an element, while textContent and innerText only allow you to insert plain text.

var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
//this will change the style of the element with the id of main-header to have a border bottom of solid 3px #000

b) GETELELEMENTSBYCLASSNAME

var items = document.getElementsByClassName("list-group-item");
console.log(items);
//the above code will return an HTML collection of all the elements with the class name "list-group-item". You can access individual elements in the collection using their index, for example:
console.log(items[0]);

//you can also modify the properties of the elements in the collection. For example, to change the font weight of the first item and the color of the second item, you can do:
items[0].style.fontWeight = "bold";
items[1].style.color = "red";
items[3].style.backgroundColor = "yellow";

//to change the text content of the third item, you can do:
items[2].textContent = "Hello you";

//to apply a style to all items in the collection, you can use a loop. For example, to set the font style of all items to italics, you can do:
for (var i = 0; i < items.length; i++) {
  items[i].style.fontStyle = "italic";
}

c) GETELELEMENTSBYTAGNAME

var li = document.getElementsByTagName("li");
console.log(li);
//the above code will return an HTML collection of all the elements with the tag name "li". You can access individual elements in the collection using their index, for example:
console.log(li[0]);

//you can also modify the properties of the elements in the collection. For example, to change the font weight of the first li and the color of the second li, you can do:
li[0].style.fontWeight = "bold";
li[1].style.color = "red";
li[3].style.backgroundColor = "yellow";

//to change the text content of the third li, you can do:
li[2].textContent = "Hello you";

//to apply a style to all li in the collection, you can use a loop. For example, to set the font style of all li to italics, you can do:
for (var i = 0; i < li.length; i++) {
  li[i].style.fontStyle = "italic";
}

d) QUERYSELECTORS 

var header = document.querySelector("#main-header");
console.log(header);
// this will select the first element with the id of main-header

header.style.borderBottom = "solid 3px #000";
// this will add a solid border to the bottom of the header element

var input = document.querySelector("input");
console.log(input);
// this will select the first input element in the document

input.value = "Hello World";
// this will set the value of the input element to "Hello World"

var submit = document.querySelector('input[type="submit"]');
console.log(submit);
// this will select the first input element with the type of submit

submit.value = "SEND";
// this will change the value of the submit button to "SEND"    

var item = document.querySelector(".list-group-item");
console.log(item);
// this will select the first element with the class of list-group-item
item.style.color = "red";
// this will change the color of the first list item to red

//NB that it only selects the first element with the class of list-group-item.

var lastItem = document.querySelector(".list-group-item:last-child");
console.log(lastItem);
// this will select the last element with the class of list-group-item
lastItem.style.color = "blue";
// this will change the color of the last list item to blue


var secondItem = document.querySelector(".list-group-item:nth-child(2)");
console.log(secondItem);
// this will select the second element with the class of list-group-item
secondItem.style.color = "green";
// this will change the color of the second list item to coral