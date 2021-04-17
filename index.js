let form = document.querySelector("button");
let cripto_currency = document.querySelector(".cripto_currency");
let currency = document.querySelector(".currency");
let input_1 = document.querySelector(".input_1");
let result = document.querySelector(".result");

async function monaie() {
  try {
    const response = await fetch(
      `https://api.cryptonator.com/api/full/ticker/${cripto_currency.value}-${currency.value}`
    );
    const data = (await response).json();
    return data;
  } catch (e) {
    console.log(" The error name is:", e);
  }
}
function hermann() {
  monaie()
    .then((data) => data.ticker)
    .then((ticker) => ticker.price)
    .then((price) => {
      result.innerHTML = `${(input_1.value * price).toFixed(2)} ${cripto_currency.value}`;
    })
    .catch((error) => (document.querySelector(".error").innerHTML = error));
}
form.addEventListener("click", hermann);
