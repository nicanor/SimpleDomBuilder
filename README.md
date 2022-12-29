# T
Simple DOM manipulation without templates.

Tiny library to manipulate the DOM.
Less than 1 KB in size.

It defines a single `T` function that receives a string, an object or a list of objects and returns a DOM node. Example:

```javascript
var object = {
  tag: "article", // it needs to have a tag attribute
  class: "book", // it can optionaly have class or any other attributes of type string.
  children: [ // it can optionally have children attribute. Which can also be an object, array or string.
    {tag: "h1", children: "The little prince"},
    {tag: "section", children: [
      {tag: "p", children: "This is a paragraph..."},
      {tag: "ul", children: [
        {tag: "li", "data-value": 1, children: "Option 1"},
        {tag: "li", "data-value": 2, children: "Option 2"},
        {tag: "li", "data-value": 3, children: "Option 3"},
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

## Why this library?

I wanted to dynamically add some HTML elements with Javascript.
I wanted it to be simple.
