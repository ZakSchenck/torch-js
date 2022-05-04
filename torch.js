let toggleState = true;
let fadeState = true;
let sliderState = false;
export default class T {
  // Query selectors
  qry = (selector) => document.querySelector(selector);
  qryAll = (selector) => document.querySelectorAll(selector);
  qryTwo = (selector) => document.querySelector(selector);

  // Displays element to none
  off = (selector) => {
    const element = this.qry(selector);
    element.style.display = "none";
  };

  // Displays element to block
  on = (selector) => {
    const element = this.qry(selector);
    element.style.display = "block";
  };

  // Displays element as user's choice on click
  display = (selector, selectorTwo, style) => {
    const element = this.qry(selector);
    const element2 = this.qryTwo(selectorTwo);
    element.addEventListener("click", () => {
      element2.style.display = style;
    });
  };

  // Toggle style display on element. Selector one is the element being toggled
  toggle = (selector, selectorTwo) => {
    const element = this.qry(selectorTwo);
    const element2 = this.qryTwo(selector);
    element2.addEventListener("click", () => {
      toggleState = !toggleState;
      if (toggleState) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  };

  // Toggles fade on element
  toggleFade = (selector, selectorTwo, trans) => {
    const element = this.qry(selectorTwo);
    const element2 = this.qryTwo(selector);
    element2.addEventListener("click", () => {
      fadeState = !fadeState;
      if (fadeState) {
        element.style.opacity = "1";
        element.style.transition = trans;
      } else {
        element.style.opacity = "0";
        element.style.transition = trans;
      }
    });
  };

  // Menu slider animation (works horizontally and vertically)
  slider = (selector, selectorTwo, width, height, speed) => {
    const element = this.qry(selector);
    const element2 = this.qryTwo(selectorTwo);
    element.addEventListener("click", () => {
      sliderState = !sliderState;
      if (sliderState) {
        element2.style.width = width;
        element2.style.height = height;
        element2.style.transition = speed;
      } else {
        element2.style.width = "0";
        element2.style.height = "0";
        element2.style.transition = speed;
      }
    });
  };

  // Gets a random integer between two numbers
  yolo = (num1, num2) => {
    Math.floor(Math.random() * num2) + num1;
  };

  // Loops through an array of data and displays all information
  data = (array, element) => {
    for (let i = 0; i < array.length; i++) {
      const newEl = document.createElement(element);
      newEl.innerText = array[i];
      document.body.appendChild(newEl);
    }
  };

  // Animates an element downwards
  animateDown = (selector, distance, speed) => {
    const element = this.qry(selector);
    element.style.marginTop = distance;
    element.style.transition = speed;
  };
  // Animates an element upwards
  animateUp = (selector, distance, speed) => {
    const element = this.qry(selector);
    element.style.marginBottom = distance;
    element.style.transition = speed;
  };
  // Animates an element to the right
  animateRight = (selector, distance, speed) => {
    const element = this.qry(selector);
    element.style.marginLeft = distance;
    element.style.transition = speed;
  };
  // Animates an element to the left
  animateLeft = (selector, distance, speed) => {
    const element = this.qry(selector);
    element.style.marginRight = distance;
    element.style.transition = speed;
  };

  // For Each plus event listener
  each = (selector, func) => {
    const element = this.qryAll(selector);
    element.forEach((item) => {
      item.addEventListener("click", func);
    });
  };
}

globalThis.$T = new T();

// Examples
// const array = ["array item 1", "array item 2", "array item 3"];

// $T.toggle(".btn-3", ".btn");
// $T.toggleFade(".btn-3", ".btn", "1s");
// $T.slider(".btn", ".slider", "100px", "200px", ".6s");
// $T.display(".click", ".textblock", "none");
// $T.yolo(1, 10);
// $T.data(array, "li");
// $T.animateRight(".btn", "100px", "1s");
// $T.each(".butn", () => console.log("hi"));
