import faker from "faker";
let products = [];
const productsEl = document.getElementById("products");

for (let i = 0; i < 10; i++) {
  products.push({ name: faker.commerce.productName() });
}

const ps = products.map((p) => `<div>${p.name}</div>`).join("");

productsEl.innerHTML = ps;
