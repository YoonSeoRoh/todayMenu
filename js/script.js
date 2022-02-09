const main = document.getElementById("main");
const foodType = document.getElementById("foodType");
const question = document.getElementById("question");
const random = document.getElementById("random");
const qna = document.getElementById("qna");
const answerList = document.getElementById("answerList");
const recommend = document.getElementById("recommend");
const result = document.getElementById("result");
const randomList = document.getElementById("randomList");

const KRFOOD = "한식";
const CFOOD = "중식";
const JFOOD = "일식";
const AMFOOD = "양식";

const NONE = "none";
const BLOCK = "block";

let typeName = ""; //음식 종류 이름
let a = []; //선택받은 답 넣는 배열
let index = []; //질문지 인덱스를 위한 배열
let endPoint = 0; //질문의 갯수
let foodNumber = 0;
let count = 0;
let indexCount = 0;

function start() {
  //시작 버튼 눌렀을 때 실행되는 함수
  //음식 종류 선택지
  main.style.display = NONE;
  foodType.style.display = BLOCK;
}
function home() {
  location.reload(true);
}
function tryAgain() {
  location.href = "../index.html";
}
function ask(typeID) {
  foodType.style.display = NONE;
  question.style.display = BLOCK;
  //각 음식 종류에 따른 질문 번호를 부여
  if (typeID === KRFOOD) {
    index = [0, 2];
    typeName = KRFOOD;
  } else if (typeID === CFOOD) {
    index = [0, 1];
    typeName = CFOOD;
  } else if (typeID === JFOOD) {
    index = [0, 2];
    typeName = JFOOD;
  } else if (typeID === AMFOOD) {
    index = [0, 3];
    typeName = AMFOOD;
  }
  endPoint = index.length;
  showQuestion(index[indexCount]);
}
function showQuestion(indexNum) {
  //질문 화면에 display
  answerList.style.animation = answerList.style.display = NONE;
  if (indexCount === endPoint) {
    question.style.display = NONE;
    pickResult();
  } else {
    qna.innerText = query[indexNum].ask;
    showAnswers(indexNum);
  }
}
function showAnswers(num) {
  //선택지를 화면에 display
  answerList.style.display = BLOCK;
  for (let i in query[num].answer) {
    const n = Object.keys(query[num].answer[i]);
    const answer = Object.values(query[num].answer[i]);
    const button = document.createElement("button");
    button.innerText = answer;
    button.className = "answerBtn";
    answerList.appendChild(button);
    button.addEventListener("click", function () {
      a[count] = n.pop();
      console.log(a[count]);
      count++;
      indexCount = indexCount + 1;
      var children = document.querySelectorAll(".answerBtn");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = NONE;
      }
      showQuestion(index[indexCount]);
    });
  }
}
function randomPick() {
  //랜덤 추천화면
  foodType.style.display = NONE;
  random.style.display = BLOCK;
}
function pick(index) {
  //랜덤으로 버튼 고르기
  const first = foodList[Math.floor(Math.random() * foodList.length)];
  const second = foodList[Math.floor(Math.random() * foodList.length)];
  const third = foodList[Math.floor(Math.random() * foodList.length)];
  const fourth = foodList[Math.floor(Math.random() * foodList.length)];
  //버튼에 따른 결과
  if (parseInt(index) === 1) {
    returnResult(first);
  }
  if (parseInt(index) === 2) {
    returnResult(second);
  }
  if (parseInt(index) === 3) {
    returnResult(third);
  }
  if (parseInt(index) === 4) {
    returnResult(fourth);
  }
}
function pickResult() {
  //필터로 결과 찾아내기
  console.log(a);
  foodList.filter(function (number) {
    if (number.type == typeName) {
      if (JSON.stringify(number.data) === JSON.stringify(a)) {
        returnResult(number);
      }
    }
  });
}
function returnResult(resultIndex) {
  //결과 보여주는 함수
  foodNumber = resultIndex;
  let nameSpan = document.createElement("span");
  let wordsP = document.createElement("p");
  let img = document.createElement("img");
  nameSpan.innerText = resultIndex.name;
  img.src = resultIndex.img;
  img.width = 200;
  img.height = 200;
  wordsP.innerText = resultIndex.words;
  wordsP.className = "fontSmall";
  recommend.appendChild(nameSpan);
  recommend.appendChild(img);
  recommend.appendChild(wordsP);
  random.style.display = NONE;
  result.style.display = BLOCK;
}
