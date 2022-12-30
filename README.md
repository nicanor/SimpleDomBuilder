# Simple DOM Builder
Single function to create DOM elements in Javascript.

The script defines a single `T` function that receives a string, an object or a list of objects and returns a DOM node. Example:

```javascript
var object = {
  tag: "article", // it needs to have a tag attribute
  class: "book", // it can optionaly have class or any other attributes of type string.
  data: {code: "12345", author: "William Zinsser"}, // data can be an object.
  children: [ // it can optionally have children attribute. Which can also be an object, array or string.
    {tag: "h1", children: "On Writing Well"},
    {tag: "section", children: [
      {tag: "p", children: "This is a paragraph..."},
      {tag: "ul", children: [
        {tag: "li", data: {value: 1}, children: "Option 1"},
        {tag: "li", data: {value: 2}, children: "Option 2"},
        {tag: "li", data: {value: 3}, children: "Option 3"},
      ]},
    ]}
  ]
}

// You convert them to DOM nodes using the `T` function:
var html = T(object);

// You inject it into your code
var library = document.getElementById("library");
library.appendChild(html);
```

It will append the following code to the library element:
```
<article class="book" data-code="12345" data-author="William Zinsser">
  <h1>On Writing Well</h1>
  <section>
    <p>This is a paragraph</p>
    <ul>
      <li data-value="1">Option 1</li>
      <li data-value="2">Option 2</li>
      <li data-value="3">Option 3</li>
    </ul>
  </section>
</article>
```

## Why this library?
Because I think that it should be easy to create DOM elements in Javascript without having to resort to a large, complex and (probably) slow template engine.

This script is less than 1KB in size.
It's easy to use and is super fast.

## How to use it?
You just copy and past it and use it how you want it.

The function is called `T`, but if you want to use a different name, just change the first line:
```
const myOwnFunctionName = (function () {
```
