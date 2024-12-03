let firstBasket = 12;
let secondBasket = 0;
let totalBasket = firstBasket + secondBasket;
document.getElementById("totalBasket").textContent = totalBasket;

document.getElementById("firstBasket").textContent = firstBasket;

document.getElementById("secondBasket").textContent = secondBasket;

function leftClick() {
  if (firstBasket < 12) {
    firstBasket++;
    secondBasket--;
    console.log(`firstBasket ${firstBasket} , secondBasket ${secondBasket}`);

    document.getElementById("firstBasket").textContent = firstBasket;
    document.getElementById("secondBasket").textContent = secondBasket;
  }
}

function rightClick() {
  if (secondBasket < 12) {
    secondBasket++;
    firstBasket--;
    console.log(`firstBasket ${firstBasket} , secondBasket ${secondBasket}`);

    document.getElementById("secondBasket").textContent = secondBasket;
    document.getElementById("firstBasket").textContent = firstBasket;
  }
}
