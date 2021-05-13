import { basketService } from '../../service/BasketService.js';
import {ProductItem} from './ProductItem.js';

class Products {
    products = [];

    handleClick = ( product )=>{
        basketService.addItem(product.id);
    }
    
    render = ()=>{
        return  this.products
        .map((product)=> new ProductItem({
            product, 
            onClick:this.handleClick
        }).render())
        .join('');
    }
}