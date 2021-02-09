import faker from "faker";
const cartEl = document.getElementById("dev-cart");

const mount = (el) => {
  el.innerHTML = `<h1>You have ${faker.random.number()} items in your cart</h1>`;
};
if (process.env.NODE_ENV === "development") {
  const cartEl = document.getElementById("dev-cart-for-isolation");
  if (cartEl) {
    mount(cartEl);
  }
}

export { mount };
