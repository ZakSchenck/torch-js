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

  // Toggles style display on element, as well as toggles images that need to be changed
  toggleImg = (selector, selectorTwo, mainImg, switchImg) => {
    const element = this.qry(selectorTwo);
    const element2 = this.qryTwo(selector);
    const imgEl = this.qry(switchImg)
    const imgEl2 = this.qry(mainImg)
    element2.addEventListener("click", () => {
      toggleState = !toggleState;
      if (toggleState) {
        element.style.display = "block";
        imgEl.style.display = "block";
        imgEl2.style.display = "none"
      } else {
        element.style.display = "none";
        imgEl.style.display = "none";
        imgEl2.style.display = "block"
      }
    });
  }

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
  loop = (array, element) => {
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
  }

  // Increments number by one on click
  increment = (selector, number) => {
    const element = this.qry(selector);
    element.addEventListener('click', () => number++)
  }

  // Decrements number by one on click
  decrement = (selector, number) => {
    const element = this.qry(selector);
    element.addEventListener('click', () => number--)
  }

  // Custom increment amount on click
  incrementCustom = (selector, selectorTwo, number) => {
    const element = this.qry(selector);
    const element2 = this.qry(selectorTwo);
    element.addEventListener('click', () => element2 += number)
  }

  // Custom decrement amount on click
  decrementCustom = (selector, selectorTwo, number) => {
    const element = this.qry(selector);
    const element2 = this.qry(selectorTwo);
    element.addEventListener('click', () => element2 -= number)
  }
}

globalThis.$T = new T();
