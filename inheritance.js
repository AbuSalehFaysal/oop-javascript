class Devices {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Phone extends Devices {
    constructor(name,price,camera){
        super(name,price);
        this.camera = camera;
    }
}

const samsung = new Phone('Samsung', 15000, '48MP');
console.log(samsung);