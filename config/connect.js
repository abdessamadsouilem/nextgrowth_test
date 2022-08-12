const mongooose = require('mongoose');





// function to connect to the database

module.exports = function () {
    mongooose.connect("mongodb+srv://abdessamad:1111@cluster0.la5tmta.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Connected to the database');
    }
    ).catch(err => {
        console.log(err);
    }
    );
}