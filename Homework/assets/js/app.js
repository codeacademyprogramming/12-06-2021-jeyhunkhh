import { productApi } from "./ProductApi.js";
import { Product } from "./src/Product.js";
import { UI } from "./src/UI.js";

async function getProductList() {
  const productInfo = await productApi.getProductInfo();
  const productArr = [];
  productInfo.forEach((pizza) =>
    productArr.push(
      new Product(pizza.id, pizza.name, pizza.topping, pizza.price)
    )
  );
  return productArr;
}

// Product
const product = await getProductList();

let row = document.querySelector(".product .row");

// Class UI
const ui = new UI;

ui.setProductDataHtml(product,row)

