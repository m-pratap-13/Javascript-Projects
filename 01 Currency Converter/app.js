const dropdown = document.querySelectorAll("select");
const button = document.querySelector("button");
const input = document.querySelector("input");
const exchangeRate = document.querySelector(".output-container");

let fromCurrency='USD';
let toCurrency='INR';

for (const select of dropdown) {
  for (const code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    select.appendChild(option);
    if (option.value === "USD" && select.id === "select-from") {
      option.setAttribute("selected", "");
    } else if (option.value === "INR" && select.id === "select-to") {
      option.setAttribute("selected", "");
    }
  }
  select.addEventListener("change", (e) => {
    if (e.target.id === "select-from") {
      fromCurrency = e.target.value;
    } else {
      toCurrency = e.target.value;
    }
    changeFlag(e.target);
  });
}

function changeFlag(select) {
  let imgSrc = `https://flagsapi.com/${countryList[select.value]}/shiny/64.png`;
  let flagIMG = select.parentElement.querySelector("img");
  flagIMG.src = imgSrc;
}

function currencyConverter() {
  fetch(
    `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (fromCurrency === toCurrency) {
        exchangeRate.innerText = "Bad Currency Pair";
        exchangeRate.style.color = "red";
        exchangeRate.style.fontSize = "15px";
      } else {
        exchangeRate.innerText = (input.value * data.rates[toCurrency]).toFixed(2);
      }
    });
}

button.addEventListener("click", () => {
  if (input.value === "") {
    exchangeRate.innerText = "Enter Your Exchnage Rate";
    exchangeRate.style.color = "red";
    exchangeRate.style.fontSize = "15px";
  } else if (input.value <= 0) {
    exchangeRate.innerText = "Enter Your Exchnage Rate Greater Than Zero";
    exchangeRate.style.color = "red";
    exchangeRate.style.fontSize = "11px";
  } else {
    currencyConverter();
  }
});
