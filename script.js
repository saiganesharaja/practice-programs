// const resultEl = document.getElementById('result');

// function clickHandler(val) {
//     resultEl.value = resultEl.value + val;
// }

// function solve() {
//     resultEl.value = eval(resultEl.value);
// }
// function cler(){
//     resultEl.value= " "
// }
// <!DOCTYPE html>
// <html lang="en">
//   <head> </head>
//   <body>
//     <div id="calculator"></div>
//     <script>
const calculatorElement = document.getElementById("calculator");

const tableElement = document.createElement("table");
calculatorElement.appendChild(tableElement);
//   tableElement.border = 1;
//body
const rowel = document.createElement("tr"); //row
tableElement.appendChild(rowel);

const displayel = document.createElement("td");
rowel.appendChild(displayel);
displayel.colSpan = "3";

const clear = document.createElement("td");
rowel.appendChild(clear);
clear.innerHTML = "c";
clear.addEventListener("click", onClickclear);

const row2 = document.createElement("tr"); // row2
tableElement.appendChild(row2);

const button1 = document.createElement("td");

row2.appendChild(button1);
button1.innerHTML = "1";
button1.addEventListener("click", onclickHandlerCler);

const button2 = document.createElement("td");

row2.appendChild(button2);
button2.innerHTML = "2";
button2.addEventListener("click", onclickHandlerCler);

const button3 = document.createElement("td");

row2.appendChild(button3);
button3.innerHTML = "3";
button3.addEventListener("click", onclickHandlerCler);

const buttons = document.createElement("td");

row2.appendChild(buttons);
buttons.innerHTML = "/";
buttons.addEventListener("click", onclickHandlerCler);

const row3 = document.createElement("tr"); // row3
tableElement.appendChild(row3);

const button4 = document.createElement("td");

row3.appendChild(button4);
button4.innerHTML = "4";
button4.addEventListener("click", onclickHandlerCler);

const button5 = document.createElement("td");

row3.appendChild(button5);
button5.innerHTML = "5";
button5.addEventListener("click", onclickHandlerCler);

const button6 = document.createElement("td");

row3.appendChild(button6);
button6.innerHTML = "6";
button6.addEventListener("click", onclickHandlerCler);

const buttonmul = document.createElement("td");

row3.appendChild(buttonmul);
buttonmul.innerHTML = "*";
buttonmul.addEventListener("click", onclickHandlerCler);

const row4 = document.createElement("tr"); // row4
tableElement.appendChild(row4);

const button7 = document.createElement("td");

row4.appendChild(button7);
button7.innerHTML = "7";
button7.addEventListener("click", onclickHandlerCler);

const button8 = document.createElement("td");

row4.appendChild(button8);
button8.innerHTML = "8";
button8.addEventListener("click", onclickHandlerCler);

const button9 = document.createElement("td");

row4.appendChild(button9);
button9.innerHTML = "9";
button9.addEventListener("click", onclickHandlerCler);

const buttonsub = document.createElement("td");

row4.appendChild(buttonsub);
buttonsub.innerHTML = "-";
buttonsub.addEventListener("click", onclickHandlerCler);

const row5 = document.createElement("tr"); // row5
tableElement.appendChild(row5);

const button0 = document.createElement("td");

row5.appendChild(button0);
button0.innerHTML = "0";
button0.addEventListener("click", onclickHandlerCler);

const buttondot = document.createElement("td");

row5.appendChild(buttondot);
buttondot.innerHTML = ".";
buttondot.addEventListener("click", onclickHandlerCler);

const buttonadd = document.createElement("td");

row5.appendChild(buttonadd);
buttonadd.innerHTML = "+";
buttonadd.addEventListener("click", onclickHandlerCler);
const buttone = document.createElement("td");

row5.appendChild(buttone);
buttone.innerHTML = "=";
buttone.addEventListener("click", onClickeqaul);

function onclickHandlerCler(event) {
    const p = event.target.innerHTML;
    displayel.innerHTML = displayel.innerHTML + p;
}

function onClickeqaul() {
    const q = eval(displayel.innerHTML);
    displayel.innerHTML = q;
}

function onClickclear() {
    displayel.innerHTML = "";
}
    </script >
  </body >
</html >