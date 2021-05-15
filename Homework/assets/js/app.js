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

let cartBtn = document.querySelectorAll(".add-basket button")
cartBtn.forEach(item =>{
  item.addEventListener("click",()=>{
    item.parentElement.parentElement.nextElementSibling.classList.toggle("active")
  })
})

let basketBtn = document.querySelector(".basket-btn")
basketBtn.addEventListener("click",()=>{
  basketBtn.parentElement.nextElementSibling.classList.toggle("active")
})

