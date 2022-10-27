module.exports = class BasketModel {
 

    constructor(oldBasket) {
        this.items = oldBasket.items;
        this.totalQty = oldBasket.totalQty;
        this.totalPrice = oldBasket.totalPrice;
    }
    
    add(item, id) {
        let storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }
            storedItem.qty ++;
            storedItem.price = storedItem.item.price * storedItem.qty;
            this.totalQty ++;
            this.totalPrice += storedItem.price
    }

    generateArray() {
        let arr = [];

        for (let id in this.items) {
            arr.push(this.item[id]);
        }

        return arr;
    }
}