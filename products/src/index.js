import faker from "faker";
let productsList = [];
const productsEl = document.getElementById("dev-products");

for (let i = 0; i < 10; i++) {
  productsList.push({ name: faker.commerce.productName() });
}

const ps = productsList.map((p) => `<div>${p.name}</div>`).join("");

productsEl.innerHTML = ps;
