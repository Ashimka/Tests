"use ctrict";
const button = document.querySelector(".btn-1");
const outResult = document.querySelector(".out-text");

let count = 0;

function resultTest() {
  rightAnswers();

  if (document.querySelector("#in1-3").checked) {
    count++;
    document.querySelector(".red[data-sp='sp-1']").classList.add("green");
  }
  if (document.querySelector("#in2-4").checked) {
    count++;
    document.querySelector(".red[data-sp='sp-2']").classList.add("green");
  }
  if (document.querySelector("#in3-1").checked) {
    count++;
    document.querySelector(".red[data-sp='sp-3']").classList.add("green");
  }
  if (document.querySelector("#in4-2").checked) {
    count++;
    document.querySelector(".red[data-sp='sp-4']").classList.add("green");
  }
  if (document.querySelector("#in5-3").checked) {
    count++;
    document.querySelector(".red[data-sp='sp-5']").classList.add("green");
  }
  return count;
}

button.addEventListener("click", () => {
  resultTest();

  if (count === 5) {
    outResult.textContent = `Ваш результат ${count} вы справились на отлично!`;
  }

  if (count === 4) {
    outResult.textContent = `Ваш результат ${count} вы справились хорошо!`;
  }

  if (count === 3) {
    outResult.textContent = `Ваш результат ${count} вы плохо знаете математику`;
  }

  if (count < 3) {
    outResult.textContent = `Ваш результат ${count} вам нужно учить математику`;
  }

  button.setAttribute("disabled", "disabled");
});

function rightAnswers() {
  document.querySelector(".text").innerHTML = `
             <span class="red" data-sp="sp-1">1</span>
             <span class="red" data-sp="sp-2">2</span>
             <span class="red" data-sp="sp-3">3</span>
             <span class="red" data-sp="sp-4">4</span>
             <span class="red" data-sp="sp-5">5</span>
  `;
}
