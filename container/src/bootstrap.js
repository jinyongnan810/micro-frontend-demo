import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";
console.log("container bootstrap");

const productsEl = document.getElementById("my-products");
productsMount(productsEl);

const cartEl = document.getElementById("my-cart");
cartMount(cartEl);
