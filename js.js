const billAmount = document.getElementById("billInput");
const tipPercentage = document.getElementById("tipInput");
const peopleNumber = document.getElementById("numberOfPeople");
const total = document.getElementById("perPersonTotal");

// calculate the bill amount

const calculateTotal = () => {
  //console.log("calculate");
  const bill = Number(billAmount.value);
  //console.log(bill);
  const tipPercent = Number(tipPercentage.value) / 100;
  //console.log(tipPercent);
  const tipAmount = bill * tipPercent;
  //console.log(tipAmount);
  const totalBill = tipAmount + bill;
  //console.log(totalBill);
  let numberOfPeople = Number(peopleNumber.value);
  const perPersonTotal = totalBill / numberOfPeople;
  //console.log(perPersonTotal);

  total.value = `${perPersonTotal.toFixed(2)}`;
};

// oncclick listner
billAmount.onmouseleave = () => {
  calculateTotal();
};

tipPercentage.onmouseleave = () => {
  calculateTotal();
};

peopleNumber.onchange = () => {
  calculateTotal();
};

total.onclick = () => {
  calculateTotal();
};
