let arrKeyTest = [
  {
    key: "Digit1",
    x: "1",
    y1: "+",
    y2: "ๅ",
  },
  {
    key: "Digit2",
    x: "2",
    y1: "๑",
    y2: "/",
  },
  {
    key: "Digit3",
    x: "3",
    y1: "๒",
    y2: "/",
  },
  {
    key: "Digit4",
    x: "4",
    y1: "๓",
    y2: "ภ",
  },
  {
    key: "Digit5",
    x: "5",
    y1: "๔",
    y2: "ถ",
  },
  {
    key: "Digit6",
    x: "6",
    y1: "ู",
    y2: "ุ",
  },
  {
    key: "Digit7",
    x: "7",
    y1: "฿",
    y2: "ึ",
  },
  {
    key: "Digit8",
    x: "8",
    y1: "๕",
    y2: "ค",
  },
  {
    key: "Digit9",
    x: "9",
    y1: "๖",
    y2: "ต",
  },
  {
    key: "Digit0",
    x: "0",
    y1: "๗",
    y2: "จ",
  },
  {
    key: "Minus",
    x: "-",
    y1: "๘",
    y2: "ข",
  },
  {
    key: "Equal",
    x: "=",
    y1: "๙",
    y2: "ช",
  },
];
var myWordTest = document.getElementById("word-test");
var myInputTest = document.getElementById("input-test");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const writeMyWordTest = (arr) => {
  myWordTest.innerHTML = "";
  arr.forEach((item, index) => {
    if (index < 2) {
      myWordTest.innerHTML =
        myWordTest.innerHTML +
        `
    <div class="numpad word-active">
      <div>${item.x}</div>
      <div>
        <div>${item.y1}</div>
        <div>${item.y2}</div>
      </div>
    </div>
  `;
    } else {
      myWordTest.innerHTML =
        myWordTest.innerHTML +
        `
    <div class="numpad">
      <div>${item.x}</div>
      <div>
        <div>${item.y1}</div>
        <div>${item.y2}</div>
      </div>
    </div>
  `;
    }
  });
};
const writeMyInputTest = (arr) => {
  myInputTest.innerHTML = "";
  arr.forEach((item) => {
    myInputTest.innerHTML =
      myInputTest.innerHTML +
      `
    <div class="numpad">
      <div>${item.x}</div>
      <div>
        <div>${item.y1}</div>
        <div>${item.y2}</div>
      </div>
    </div>
  `;
  });
};

const deleteWord = (arr, newWord) => {
  let newArr = [];
  arr.forEach((item, index) => {
    index !== 0 && newArr.push(item);
  });
  newArr.push(newWord);
  return newArr;
};
const findWord = (key) => {
  let keyValue = {
    key: "",
    x: "",
    y1: "",
    y2: "",
  };
  arrKeyTest.forEach((item) => {
    console.log(item.key, key);
    if (item.key === key)
      keyValue = {
        key: item.key,
        x: item.x,
        y1: item.y1,
        y2: item.y2,
      };
  });
  return keyValue;
};

let arrMyWordTest = [
  {
    key: "Digit1",
    x: "1",
    y1: "+",
    y2: "ๅ",
  },
  {
    key: "Digit2",
    x: "2",
    y1: "๑",
    y2: "/",
  },
  {
    key: "Digit3",
    x: "3",
    y1: "๒",
    y2: "/",
  },
  {
    key: "Digit4",
    x: "4",
    y1: "๓",
    y2: "ภ",
  },
  {
    key: "Digit5",
    x: "5",
    y1: "๔",
    y2: "ถ",
  },
];
let arrMyInputTest = [
  {
    key: "Digit1",
    x: "1",
    y1: "+",
    y2: "ๅ",
  },
  {
    key: "Digit2",
    x: "2",
    y1: "๑",
    y2: "/",
  },
  {
    key: "Digit3",
    x: "3",
    y1: "๒",
    y2: "/",
  },
  {
    key: "Digit4",
    x: "4",
    y1: "๓",
    y2: "ภ",
  },
  {
    key: "Digit5",
    x: "5",
    y1: "๔",
    y2: "ถ",
  },
];

writeMyWordTest(arrMyWordTest);
writeMyInputTest(arrMyInputTest);

document.addEventListener(
  "keydown",
  (event) => {
    //active key
    console.log(`key: ${event.code}`);
    var element = document.getElementById(`${event.code}`);

    if (event.code === "Backspace") {
      myInputTest.innerHTML = "";
    } else if (element !== null) {
      //active keycap
      element.classList.add("active");
      setTimeout(function () {
        //your code to be executed after .3 second
        if (element !== null) {
          element.classList.remove("active");
        }
      }, 300);

      //check word keydow
      if (arrMyWordTest[2].key === event.code) {
        myInputTest.classList.remove("incorrect");
      } else {
        myInputTest.classList.add("incorrect");
      }

      //gen word test

      arrMyWordTest = deleteWord(arrMyWordTest, arrKeyTest[getRandomInt(10)]);
      writeMyWordTest(arrMyWordTest);

      //show keydown
      arrMyInputTest = deleteWord(arrMyInputTest, findWord(event.code));
      writeMyInputTest(arrMyInputTest);
      console.log(findWord(event.key));
    } else {
      alert(
        `Without Key test \nKey pressed: '${event.key}' \nKey code: '${event.code}'`
      );
    }
  },
  false
);
