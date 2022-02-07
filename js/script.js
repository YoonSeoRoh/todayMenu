const main = document.getElementById("main");
const foodType = document.getElementById("foodType");
const random = document.getElementById("random");
const result = document.getElementById("result");
const randomList = document.getElementById("randomList");
function start() {
  //시작 버튼 눌렀을 때 실행되는 함수
  //음식 종류 선택지
  main.style.display = "none";
  foodType.style.display = "block";
}
function home() {
  result.style.display = "none";
  main.style.display = "block";
}
function pick(num) {
  //랜덤 추천 중 고르기
  console.log(num);
}
function randomPick() {
  //랜덤 추천
  foodType.style.display = "none";
  random.style.display = "block";

  // const first = foodList[Math.floor(Math.random() * foodList.length)];
  // const second = foodList[Math.floor(Math.random() * foodList.length)];
  // const third = foodList[Math.floor(Math.random() * foodList.length)];
  // const fourth = foodList[Math.floor(Math.random() * foodList.length)];
  for (i = 0; i < 4; i++) {
    const button = document.createElement("button");
    button.addEventListener("click", pick(i));
    randomList.appendChild(button);
  }
}
