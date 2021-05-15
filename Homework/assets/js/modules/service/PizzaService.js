import { HttpClient } from '../../HttpClient/index.js'


class PizzaService extends HttpClient {
    constructor(){
        super('https://private-anon-397b566a9a-pizzaapp.apiary-mock.com');
    }

    async getProducts(){
        return this.get('restaurants/restaurantId/menu?category=Pizza&orderBy=rank');
    }
}

export const pizzaService = new PizzaService();