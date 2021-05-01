class Pendrive {
    constructor(capacity, color, price){
        this.capacity =capacity;
        this.color = color;
        this.price=price;
    }
}

const apacer = new Pendrive('64GB', 'black', '1000');
console.log(apacer);