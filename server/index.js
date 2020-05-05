const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const path = require('path');

const productsRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        if (process.env.NODE_ENV != 'production') {
            const fakeDb = new FakeDb();
            // fakeDb.initDb();
        }
    }
)

const app = express();

app.use('/api/v1/products', productsRoutes)
if (process.env.NODE_ENV == 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'reservation-app');
    app.use(express.static(appPath));
    app.get('*', function (req, res) {
        res.sendfile(path.resolve(appPath, 'index.html'));
    })
}
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('I am running.');
})

//mongodb+srv://test:<password>@cluster0-6lfol.mongodb.net/test?retryWrites=true&w=majority