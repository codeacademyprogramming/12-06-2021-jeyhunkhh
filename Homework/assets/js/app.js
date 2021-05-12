import { productApi } from "./ProductApi.js";

productApi.getProductInfo().then(res=>console.log(res));