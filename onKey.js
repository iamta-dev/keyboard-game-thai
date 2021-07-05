let keyTest = "qwertyuiopasdfghjkl;zxcvbnm,./";
let arrKeyTest = keyTest.split("");
var myWordTest = document.getElementById("word-test");
var myInputTest = document.getElementById("input-test");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const writeMyWordTest = (arr) => {
  myWordTest.innerHTML = "";
  arr.forEach((arr, index) => {
    if (index < 5) {
      myWordTest.innerHTML =
        myWordTest.innerHTML +
        `<span class="word-active" key=${index}>${arr}</span>`;
    } else {
      myWordTest.innerHTML =
        myWordTest.innerHTML + `<span key=${index}>${arr}</span>`;
    }
  });
};
const writeMyInputTest = (arr) => {
  myInputTest.innerHTML = "";
  arr.forEach((arr, index) => {
    if (index === 10) {
      myInputTest.innerHTML =
        myInputTest.innerHTML +
        `<span class="input-active" key=${index}>${arr}</span>`;
    } else {
      myInputTest.innerHTML =
        myInputTest.innerHTML + `<span key=${index}>${arr}</span>`;
    }
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

let arrMyWordTest = ["a", "a", "a", "a", "a", "Z", "a", "a", "a", "a", "a"];
let arrMyInputTest = ["a", "a", "a", "a", "a", "Z", "a", "a", "a", "a", "a"];

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
      console.log(arrMyWordTest[5], event.key);
      if (arrMyWordTest[5] === event.key) {
        myInputTest.classList.remove("incorrect");
      } else {
        myInputTest.classList.add("incorrect");
      }

      //gen word test

      arrMyWordTest = deleteWord(arrMyWordTest, arrKeyTest[getRandomInt(30)]);
      writeMyWordTest(arrMyWordTest);

      //show keydown
      arrMyInputTest = deleteWord(arrMyInputTest, event.key);
      writeMyInputTest(arrMyInputTest);
    } else {
      alert(
        `Without Key test \nKey pressed: '${event.key}' \nKey code: '${event.code}'`
      );
    }
  },
  false
);
