let factorial_structutre = document.getElementById(
  "factorial_structure"
).innerText;
let factorial_answer = document.getElementById("factorial_answer").innerText;
let confirm_button = document.getElementById("confirm_button");

confirm_button.addEventListener("click", colorchanger);

function colorchanger() {
  if (confirm_button.style.backgroundColor == "red") {
    confirm_button.style.backgroundColor = "green";
  } else {
    confirm_button.style.backgroundColor = "red";
  }
}

let factorial = document.getElementById("factorial");
