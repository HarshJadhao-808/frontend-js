// const { jsx } = require("react/jsx-runtime");

let form = document.getElementById("dataForm");
let submit_button = document.querySelector("button");
form.addEventListener("submit", get_data);
let tbody = document.querySelector("tbody");
let data_arr = JSON.parse(localStorage.getItem("data")) || [];
data_table(data_arr)

function get_data() {
  event.preventDefault();
  let gender = document.getElementById("gender");
  let age_group = document.getElementById("age_group");
  let amount_letters = document.getElementById("amount_letters");
  let amount_number = document.getElementById("amount_number");
  let e_mail = document.getElementById("e_mail");
  let data_obj = {
    gender: gender.value,
    Title: age_group.value,
    amount_letters: amount_letters.value,
    amount_number: amount_number.value,
    e_mail: e_mail.value,
  };
  data_arr.push(data_obj);
  localStorage.setItem("data", JSON.stringify(data_arr))
  data_table(data_arr);
}

function data_table(data) {
  tbody.innerHTML = "";
  for (i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    if (data[i].Title == "Little Light of Hope") {
      row.style.backgroundColor = "#E0F7FA";
    } else if (data[i].Title == "Rising Humanitarian") {
      row.style.backgroundColor = "#FFF3E0";
    } else if (data[i].Title == "Heart of Gold Donor") {
      row.style.backgroundColor = "#E8F5E9";
    } else {
      row.style.backgroundColor = "#F3E5F5";
    }
    let data1 = document.createElement("td");
    data1.innerText = data[i].gender;
    let data2 = document.createElement("td");
    data2.innerText = data[i].Title;
    let data3 = document.createElement("td");
    data3.innerText = data[i].amount_letters;
    let data4 = document.createElement("td");
    data4.innerText = data[i].amount_number;
    let data5 = document.createElement("td");
    data5.innerText = data[i].e_mail;
    let data6 = document.createElement("td");
    data6.addEventListener("click",cancel_fun)
    data6.innerText = "❌";
    data6.setAttribute("id","delete_button")
    row.append(data1, data2, data3, data4, data5, data6);
    tbody.append(row);

}
}


function cancel_fun(){
    event.target.parentNode.remove()
}