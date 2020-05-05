const Product = require('./model/product');

class FakeDB {
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample text1',
                heading2: 'sample text2',
                heading3: 'sample text3',
                headingtext1: 'sample text1',
                headingtext2: 'sample text2',
                headingtext3: 'sample text3'
            },
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: '',
                heading2: '',
                heading3: '',
                headingtext1: '',
                headingtext2: '',
                headingtext3: ''
            },
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: '',
                heading2: '',
                heading3: '',
                headingtext1: '',
                headingtext2: '',
                headingtext3: ''
            }

        ]
    }

    async initDb() {
        this.cleanDb();
        this.pushProductsToDb();
    }

    async cleanDb() {
        await Product.deleteMany({});
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsToDb();
    }
}

module.exports = FakeDB