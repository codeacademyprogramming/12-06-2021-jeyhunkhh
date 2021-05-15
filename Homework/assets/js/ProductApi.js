import { HttpClient } from './HttpClient/index.js';

class ProductApi extends HttpClient {
    constructor(){
        super('https://private-anon-397b566a9a-pizzaapp.apiary-mock.com');
    }

    getProductInfo(){
        return this.get('restaurants/restaurantId/menu?category=Pizza&orderBy=rank');
    }
}

export const productApi = new ProductApi();