let factorial_structutre = document.getElementById("factorial_structure");
let factorial_answer = document.getElementById("factorial_answer");
let confirm_button = document.getElementById("confirm_button");

let factorial = document.getElementById("factorial");
confirm_button.addEventListener("click", answer_call);

function answer_call() {
  if (confirm_button.style.backgroundColor == "rgb(246, 10, 10)") {
    confirm_button.style.backgroundColor = "rgb(101, 215, 101)";
  } else {
    confirm_button.style.backgroundColor = "rgb(246, 10, 10)";
  }
  let a = +factorial.value;
  let structure = " ";
  let exclamation_mark = "!";
  let space = " ";

  if (a == 0) {
    structure = "WoW that's 0 and it has an exception its factorial is = !1";
  }
  if (a < 0) {
    structure = "!oh sorry it seems you have put some negative integer";
  }
  if (a == 1) {
    structure = "WoW that's 1 and it has an exception its factorial is = ";
  }

  for (let i = a; i > 0; i--) {
    structure += exclamation_mark + a + space;
    a--;
  }
  factorial_structutre.innerText = structure;

  let n = +factorial.value;
  let total = 1;
  for (i = n; i > 0; i--) {
    total *= i;
  }
  factorial_answer.innerText = total;
}

let answer_box = document.getElementById("answer_box");

let retry_button =document.createElement("button")

answer_box.append(retry_button)

retry_button.setAttribute("id","retry")

retry_button.addEventListener("click",refresh_button)

function refresh_button(){
  confirm_button.style.backgroundColor = "rgb(101, 215, 101)";
  factorial.value=0;
  factorial_answer.innerText=" ";
  factorial_structutre.innerText=" "
}

