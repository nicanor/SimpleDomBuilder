(function () {
  // First we get the <ul> Element where to append the tests results
  var tests = document.getElementById("tests");

  // Then we define the test function that will append the test result as a <li>.
  // In case of an error it will also display the error in the dev console.
  function test(description, f) {
    try {
      f();
      const success = T({ tag: "li", class: "success", children: ['\u2714 ', description] })
      tests.appendChild(success);
    } catch (error) {
      const failure = T({ tag: "li", class: "failure", children: ['\u2718 ', description] })
      tests.appendChild(failure);
      console.error(error);
    }
  }

  // We define the assert function, that throws an error in case of a falsy value.
  function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
  }

  // That's it. Now that we have the functions we can define all our tests.
  // In order to run the tests, just visit the test.html file.
  // You will see the test results in the screen.

  test('convert string to TextNode', function () {
    const hello = "Hello";
    const html = T(hello);
    assert(html.constructor == Text);
    assert(html.wholeText == "Hello");
  });

  test('convert array to DocumentFragment', function () {
    const array = ["Hello", "World"];
    const html = T(array);
    assert(html.constructor == DocumentFragment);
    assert(html.firstChild.data == "Hello");
    assert(html.lastChild.data == "World");
  });

  test('convert object to Element', function () {
    const object = { tag: "button", class: "btn", children: "Submit" };
    const html = T(object);
    assert(html.constructor == HTMLButtonElement);
    assert(html.className == "btn");
    assert(html.firstChild.data == "Submit");
  });

  test('recursively converts everything to Element', function () {
    const items = [
      { code: 1, name: "Apple" },
      { code: 2, name: "Orange" },
      { code: 3, name: "Lemon" },
      { code: 4, name: "Berry" },
      { code: 5, name: "Cherry" }
    ]

    const template = function (item) {
      return {
        tag: "li",
        class: "item",
        data: { code: item.code },
        children: item.name,
      }
    }

    const list = items.map(template);
    const html = T({ tag: "ul", class: "list", children: list });
    assert(html.constructor == HTMLUListElement);
  });
})();
