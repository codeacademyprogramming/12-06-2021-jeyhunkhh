import { storage } from '../../Storage/index.js';
import { STORAGE_KEYS } from '../../Storage/consts.js';

class BasketService {
    hasBasket() {
        return !!storage.getItem(STORAGE_KEYS.BASKET);
    }

    setInitialBasket() {
        this.setBasketToLocal([]);
    }

    setBasketToLocal(basket=[]){
        storage.setItem(STORAGE_KEYS.BASKET, basket);
    }

    getBasketFromLocal() {
        if (this.hasBasket()) {
            return JSON.parse(storage.getItem(STORAGE_KEYS.BASKET));
        }
    }

    addItem(itemId) {
        if (!this.hasBasket()) {
            this.setInitialBasket();
        }

        const basket = [...this.getBasketFromLocal()];
        const itemInBasket = basket.find(({ id }) => id === itemId);
        let newBasket = [];

        if (!!itemInBasket) { // Eger hazirki pizza basketde varsa
            const filteredItems = basket.filter(({ id }) => id !== itemId);
            newBasket = [
                ...filteredItems,
                {
                    id: itemId,
                    count: itemInBasket.count + 1
                }
            ];
        } else {
            newBasket = [...basket, { id: itemId, count: 1 }];
        }

        this.setBasketToLocal(newBasket);
    }

    removeItem(itemId) {
        this.getBasketFromLocal().filter(({id}) => id !== itemId);
    }
}

export const basketService = new BasketService();