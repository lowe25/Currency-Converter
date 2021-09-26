var peso = "PHP";
var cur1 = "USD";
var cur2 = "JPY";
var search = document.getElementById("txt-amount").value;
var cboFrom = document.getElementById("cbo-from");
var cboTo = document.getElementById("cbo-to");
var btn = document.getElementById("btn-select");
var from;
var to;


cboFrom.addEventListener("change", (event) => {
  from = event.target.value;
});

cboTo.addEventListener("change", (event) => {
  to = event.target.value;
});

btn.addEventListener("click", apiFunc);

function apiFunc() {
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((currency) => {
      if (currency.ok) {
        return currency.json();
      }
    })
    .then(cboCurrency)
    .catch((err) => {
      console.error(err);
    });
}

//Converting Currency
function cboCurrency(currency) {
  let fromRate = currency.rates[from];
  let toRate = currency.rates[to];
  var fixed;
  total = (toRate / fromRate) * search;
  //fixed = total.toFixed(2);
  fixed = total.toLocaleString();
  totAmount = document.getElementById("totalAmount").innerHTML = fixed;
}
