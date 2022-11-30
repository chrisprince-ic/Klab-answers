const item = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

const input = document.querySelector("#payment");
const ul = document.querySelector("#ul");
let defaultMoney = [];
const addMoney = document.getElementById("addMoney");
const money = document.querySelector("#money");
const addAmount = document.querySelector("#addamount");
const Payment = document.querySelector("#payment");
const submitAmount = document.querySelector("#submitamount");
const Total = document.querySelector("#total");
const Paid = document.querySelector("#paid");
if (item) {
  for (let i = 0; i < item.length; i++) {
    const li = document.createElement("li");
    li.textContent += `${item[i].name} : ${item[i].price}`;
    ul.append(li);
  }
}

addAmount.addEventListener("click", () => {
  defaultMoney.pop();
  defaultMoney.push(addmoney.value);
  console.log(defaultMoney);
  renderMoney();
});

submitAmount.addEventListener("click", () => {});

function renderMoney() {
  money.textContent = `You have $` + defaultMoney[0];
}

let add =
  item[0].price +
  item[1].price +
  item[2].price +
  item[3].price +
  item[4].price +
  item[5].price;

console.log(add);

Total.textContent = `Total : ` + add;

submitAmount.addEventListener("click", () => {
  let value = defaultMoney[0] - Payment.value;

  Paid.textContent = `Balance is ${value}  you paid ${payment.value}`;
});
