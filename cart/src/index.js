import faker from "faker";
const cartEl = document.getElementById("dev-cart");

cartEl.innerHTML = `<h1>You have ${faker.random.number()} items in your cart</h1>`;
