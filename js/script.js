const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99,
  25.8,
  144.39,
  12.98,
  4.99,
  38.75,
  14.5,
  99.99,
  75.4,
  4.75,
  62.88
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}

// Write showMinMax function here
const showMinMax = function (expenses) {
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);

  const newMaxList = document.createElement("li");
  newMaxList.innerText = `Max: $ ${max}`;
  const newMinList = document.createElement("li");
  newMinList.innerText = `Min: $ ${min}`;

  results.append(newMaxList);
  results.append(newMinList);
  results.classList.remove("hide");
};

// Write click event listener for 'button' and call the showMinMax function
button.addEventListener("click", function () {
  showMinMax(expenses);
  button.disabled = true;
});
