const T = (function () {
  "use strict";

  function tag(element) {
    if (element.constructor == Array) return fragment(element);
    if (typeof element == "object") return node(element);
    if (typeof element == "string") return document.createTextNode(element);
  }

  function fragment(list) {
    var fragment = document.createDocumentFragment();
    list.forEach(child => fragment.appendChild(tag(child)));
    return fragment;
  }

  function node(object) {
    var element = document.createElement(object.tag);
    for (const key in object) { setAttribute(element, key, object[key]); }
    return element;
  }

  function setAttribute(element, key, value) {
    if (key == "tag") {  // Ignore this case
    } else if (key == "children") {
      element.appendChild(tag(value));
    } else if (typeof value == "string") {
      element.setAttribute(key, value)
    }
  }

  return tag;
})();
