1- What to expect ?

You want a button change colour or when you hover over some text it display the image
first, you need to reference those elements from you javascript.

What is DOM ?
- A programming interface for web documents.
- DOM is not a programming language.
- Represents the page so that programs can change the docuement structure, style, and content.
- the dom is a tree-like representation of the web page that gets loaded into the browser.
- the DOM represents the document as nodes and objects.
- without it, the javascript language wouldn't have any model or notion of web pages, html documents, SVG documents and their componenets parts.
- web API used to build website.

Assessing the DOM ??
- When you create a script, whether inline in <script> element or included in the web page, you can immediately begin you can immediately begin using the API of the document or window objects to manipulate the document itself.

- the dom was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

DOM Tree 
- the dom is a tree-like representation of the web page that gets loaded into the browser.
- when a web browser pareses an HTML document, it builds a DOM tree and then uses it to display the document.

The Document Object
- This is the top most object in the DOM. It has properties and methods which you can use to get information about the document using a rule known as dot notation.


Finding HTML Elements
1- finding html elements by id
2- by tag name, by class name, css selectors, html object collections

1- documents.anchors - document.anchors.length = 3 mean total anchor tags how many
2- document.body
3- document.documentElement  - document.documentElement.innerHTML = body data
4- document.embeds  
5- document.forms
6- document.head
7- documents.image, link, scripts, title

HTML collection
- getElementbyClassName() and getElementByTagName() methods returns a live html colleciton
- a collection of document elements
- items can be accessed by their name, id, or index number.
- it is always a live collection. Example, if you add <li> element in a list in the DOM, the list in the HTML collection will also change.

NodeList
- querySelectorAll() methods returns  a static node list
- a collection of document nodes
- items can be accessed by their index number
- most often  a static collection. Example, if you add <li> element to a list in the ODM, the list in the nodelist will not change

Property
- element.innerHTML = new html content -> change the inner HTML of an element
- element.attribute = new value -> change the attribute value of an html element
- element.style.property = new style -> change the style of an html element
- element.setAttribute(attribute,value) -> change the attribute value of an html element

example - document.getElementById('myH1').setAttribute("class","democlass");