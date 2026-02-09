
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

