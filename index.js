const express = require('express');
const app = express();
app.use(express.json());
const connect = require('./config/connect');





const ProductRoute = require('./routes/productRoute');

app.use('/', ProductRoute);





app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
}
);