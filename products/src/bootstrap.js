import faker from "faker";
const mount = (el) => {
  let productsList = [];

  for (let i = 0; i < 10; i++) {
    productsList.push({ name: faker.commerce.productName() });
  }

  const ps = productsList.map((p) => `<div>${p.name}</div>`).join("");

  el.innerHTML = ps;
};

if (process.env.NODE_ENV === "development") {
  const productsEl = document.getElementById("dev-products-for-isolation");
  if (productsEl) {
    mount(productsEl);
  }
}

export { mount };
