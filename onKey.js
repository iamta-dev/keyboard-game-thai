let arrKeyTest = [
  // lsit 1
  {
    key: "Digit1",
    e1: "!",
    e2: "1",
    t1: "+",
    t2: "ๅ",
  },
  {
    key: "Digit2",
    e1: "@",
    e2: "2",
    t1: "๑",
    t2: "/",
  },
  {
    key: "Digit3",
    e1: "#",
    e2: "3",
    t1: "๒",
    t2: "/",
  },
  {
    key: "Digit4",
    e1: "$",
    e2: "4",
    t1: "๓",
    t2: "ภ",
  },
  {
    key: "Digit5",
    e1: "%",
    e2: "5",
    t1: "๔",
    t2: "ถ",
  },
  {
    key: "Digit6",
    e1: "^",
    e2: "6",
    t1: "ู",
    t2: "ุ",
  },
  {
    key: "Digit7",
    e1: "&",
    e2: "7",
    t1: "฿",
    t2: "ึ",
  },
  {
    key: "Digit8",
    e1: "*",
    e2: "8",
    t1: "๕",
    t2: "ค",
  },
  {
    key: "Digit9",
    e1: "(",
    e2: "9",
    t1: "๖",
    t2: "ต",
  },
  {
    key: "Digit0",
    e1: ")",
    e2: "0",
    t1: "๗",
    t2: "จ",
  },
  {
    key: "Minus",
    e1: "_",
    e2: "-",
    t1: "๘",
    t2: "ข",
  },
  {
    key: "Equal",
    e1: "+",
    e2: "=",
    t1: "๙",
    t2: "ช",
  },
  // list 2
  {
    key: "KeyQ",
    e1: "Q",
    e2: "",
    t1: "๐",
    t2: "ๆ",
  },
  {
    key: "KeyW",
    e1: "W",
    e2: "",
    t1: "\"",
    t2: "ไ",
  },
  {
    key: "KeyE",
    e1: "E",
    e2: "",
    t1: "ฎ",
    t2: "ำ",
  },
  {
    key: "KeyR",
    e1: "R",
    e2: "",
    t1: "ฑ",
    t2: "พ",
  },
  {
    key: "KeyT",
    e1: "T",
    e2: "",
    t1: "ธ",
    t2: "ะ",
  },
  {
    key: "KeyY",
    e1: "Y",
    e2: "",
    t1: "ํ",
    t2: "ั",
  },
  {
    key: "KeyU",
    e1: "U",
    e2: "",
    t1: "๊",
    t2: "ี",
  },
  {
    key: "KeyI",
    e1: "I",
    e2: "",
    t1: "ณ",
    t2: "ร",
  },
  {
    key: "KeyO",
    e1: "O",
    e2: "",
    t1: "ฯ",
    t2: "น",
  },
  {
    key: "KeyP",
    e1: "P",
    e2: "",
    t1: "ญ",
    t2: "ย",
  },
  {
    key: "BracketLeft",
    e1: "{",
    e2: "[",
    t1: "ฐ",
    t2: "บ",
  },
  {
    key: "BracketRight",
    e1: "}",
    e2: "]",
    t1: ",",
    t2: "ล",
  },
  {
    key: "Backslash",
    e1: "|",
    e2: "\\",
    t1: "ฅ",
    t2: "ฃ",
  },

  // list 3
  {
    key: "KeyA",
    e1: "A",
    e2: "",
    t1: "ฤ",
    t2: "ฟ",
  },
  {
    key: "KeyS",
    e1: "S",
    e2: "",
    t1: "ฆ",
    t2: "ห",
  },
  {
    key: "KeyD",
    e1: "D",
    e2: "",
    t1: "ฏ",
    t2: "ก",
  },
  {
    key: "KeyF",
    e1: "F",
    e2: "",
    t1: "โ",
    t2: "ด",
  },
  {
    key: "KeyG",
    e1: "G",
    e2: "",
    t1: "ฌ",
    t2: "เ",
  },
  {
    key: "KeyH",
    e1: "H",
    e2: "",
    t1: "็",
    t2: "้",
  },
  {
    key: "KeyJ",
    e1: "J",
    e2: "",
    t1: "๋",
    t2: "่",
  },
  {
    key: "KeyK",
    e1: "K",
    e2: "",
    t1: "ษ",
    t2: "า",
  },
  {
    key: "KeyL",
    e1: "L",
    e2: "",
    t1: "ศ",
    t2: "ส",
  },
  {
    key: "Semicolon",
    e1: ":",
    e2: ";",
    t1: "ซ",
    t2: "ว",
  },
  {
    key: "Quote",
    e1: "\"",
    e2: "'",
    t1: ".",
    t2: "ง",
  },

  // list 4
  {
    key: "KeyZ",
    e1: "Z",
    e2: "",
    t1: "(",
    t2: "ผ",
  },
  {
    key: "KeyX",
    e1: "X",
    e2: "",
    t1: ")",
    t2: "ป",
  },
  {
    key: "KeyC",
    e1: "C",
    e2: "",
    t1: "ฉ",
    t2: "แ",
  },
  {
    key: "KeyV",
    e1: "V",
    e2: "",
    t1: "ฮ",
    t2: "อ",
  },
  {
    key: "KeyB",
    e1: "B",
    e2: "",
    t1: "ฺ",
    t2: "ิ",
  },
  {
    key: "KeyN",
    e1: "N",
    e2: "",
    t1: "์",
    t2: "ื",
  },
  {
    key: "KeyM",
    e1: "M",
    e2: "",
    t1: "?",
    t2: "ท",
  },
  {
    key: "Comma",
    e1: "<",
    e2: ",",
    t1: "ฒ",
    t2: "ม",
  },
  {
    key: "Period",
    e1: ">",
    e2: ".",
    t1: "ฬ",
    t2: "ใ",
  },
  {
    key: "Slash",
    e1: "?",
    e2: "/",
    t1: "ฦ",
    t2: "ฝ",
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
      <div>
        <div>${item.e1}</div>
        <div>${item.e2}</div>
      </div>
      <div>
        <div>${item.t1}</div>
        <div>${item.t2}</div>
      </div>
    </div>
  `;
    } else {
      myWordTest.innerHTML =
        myWordTest.innerHTML +
        `
    <div class="numpad">
      <div class="keycap-normal">
        <div>${item.e1}</div>
        <div>${item.e2}</div>
      </div>  
      <div>
        <div class="${item.active==="1"?"keycap-active":"keycap-normal"}">${item.t1}</div>
        <div class="${item.active==="2"?"keycap-active":"keycap-normal"}">${item.t2}</div>
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
      <div>
        <div>${item.value}</div>
      </div>  
    </div>
  `;
  });
};

const deleteWord = (arr, newWord, type) => {
  let newArr = [];
  arr.forEach((item, index) => {
    index !== 0 && newArr.push(item);
  });
  if(type==="gen-word"){
    newArr.push(
      {
        language:"eng",
        active: (getRandomInt(2)+1).toString(),
        key: newWord.key,
        e1: newWord.e1,
        e2: newWord.e2,
        t1: newWord.t1,
        t2: newWord.t2,
      }
    );
  }else if(type==="input-word"){
    newArr.push(
      {
        key: newWord.key,
        value: newWord.value,
      }
    );
  }
  
  return newArr;
};
const findWord = (key,value) => {
  let keyValue = {
    key: key,
    value: value,
  };
  return keyValue;
};

let arrMyWordTest = [
  {
    language:"eng",
    active:"1",
    key: "Digit1",
    e1: "!",
    e2: "1",
    t1: "+",
    t2: "ๅ",
  },
  {
    language:"eng",
    active:"1",
    key: "Digit2",
    e1: "@",
    e2: "2",
    t1: "๑",
    t2: "/",
  },
  {
    language:"eng",
    active:"1",
    key: "Digit3",
    e1: "#",
    e2: "3",
    t1: "๒",
    t2: "/",
  },
  {
    language:"eng",
    active:"1",
    key: "Digit4",
    e1: "$",
    e2: "4",
    t1: "๓",
    t2: "ภ",
  },
  {
    language:"eng",
    active:"1",
    key: "Digit5",
    e1: "%",
    e2: "5",
    t1: "๔",
    t2: "ถ",
  },
];
let arrMyInputTest = [
  {
    key: "Digit1",
    value: "1"
  },
  {
    key: "Digit2",
    value: "2"
  },
  {
    key: "Digit3",
    value: "3"
  },
  {
    key: "Digit4",
    value: "4"
  },
  {
    key: "Digit5",
    value: "5"
  },


];

writeMyWordTest(arrMyWordTest);
writeMyInputTest(arrMyInputTest);

document.addEventListener(
  "keydown",
  (event) => {
    //active key

    if(event.code!=="ShiftLeft" && event.code!=="ShiftRight"){
      // console.log(`key: ${event.key}`);
      // console.log(`code: ${event.code}`);
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
        if(arrMyWordTest[2].active==="1"){
          console.log(`${arrMyWordTest[2].t1 +" "+ event.key}`);
          if (arrMyWordTest[2].t1 === event.key) {
            myInputTest.classList.remove("incorrect");
          } else {
            myInputTest.classList.add("incorrect");
          }
        }else if(arrMyWordTest[2].active==="2"){
          console.log(`${arrMyWordTest[2].t1 +" "+ event.key}`);
          if (arrMyWordTest[2].t2 === event.key) {
            myInputTest.classList.remove("incorrect");
          } else {
            myInputTest.classList.add("incorrect");
          }
        }
        

        //gen word test

        arrMyWordTest = deleteWord(arrMyWordTest, arrKeyTest[getRandomInt(arrKeyTest.length)], "gen-word");
        writeMyWordTest(arrMyWordTest);

        //show keydown
        arrMyInputTest = deleteWord(arrMyInputTest, findWord(event.code,event.key), "input-word");
        writeMyInputTest(arrMyInputTest);
        // console.log(findWord(event.key));
      }
    }

  },
  false
);
