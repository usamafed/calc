console.log("Calculator");

const btn = document.querySelectorAll(".btn");
const output = document.querySelector(".result");
let operation;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log(btn[i].textContent);
    output.textContent = output.textContent + btn[i].textContent;

    checkBtn(btn[i]);
  });
}

const checkBtn = function (btn) {
  if (
    btn.classList.contains("btn-plus") ||
    btn.classList.contains("btn-minus") ||
    btn.classList.contains("btn-multiply") ||
    btn.classList.contains("btn-divide")
  ) {
    operation = btn.textContent;
  } else if (btn.classList.contains("btn-equals")) {
    const [first, lastt] = output.textContent.split(operation);
    const [last] = lastt.split("=");
    output.textContent = calculate(first, operation, last);
  }
};

const calculate = (first, op, last) => {
  if (op === "+") return Number(first) + Number(last);
  if (op === "-") return Number(first) - Number(last);
  if (op === "/") return Number(first) / Number(last);
  if (op === "x") return Number(first) * Number(last);
};
