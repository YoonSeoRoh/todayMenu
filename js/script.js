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

function start() {
  //시작 버튼 눌렀을 때 실행되는 함수
  //음식 종류 선택지
  main.style.display = NONE;
  foodType.style.display = BLOCK;
}
function home() {
  location.reload(true);
}
function ask(typeID) {
  foodType.style.display = NONE;
  question.style.display = BLOCK;
  qna.innerText = query[0].ask;
  // const answerFirst = query[0].answer[0];
  // const answerSecond = query[0].answer[1];
  // const answerThird = query[0].answer[2];
  // const index = Object.keys(query[0].answer[0]);
  // const answer = Object.values(query[0].answer[0]);
  // console.log(index);
  // console.log(answer);
  // const button = document.createElement("button");
  // answerList.appendChild(button);
  // button.innerText = answer;
  for (var i in query[0].answer) {
    const index = Object.keys(query[0].answer[i]);
    const answer = Object.values(query[0].answer[i]);
    const button = document.createElement("button");
    button.innerText = answer;
    button.className = "answerBtn";
    answerList.appendChild(button);
  }
  // for (i = 0; i < 3; i++) {
  //   const answer = query[0].answer[i];
  //   const p = document.createElement("p");
  //   p.innerText = answer;
  //   answerList.appendChild(p);
  // }
}
function pick(num) {
  //랜덤 추천 중 고르기
  console.log(num);
}
function randomPick() {
  //랜덤 추천
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
function returnResult(resultIndex) {
  const nameSpan = document.createElement("span");
  const wordsP = document.createElement("p");
  const img = document.createElement("img");
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
