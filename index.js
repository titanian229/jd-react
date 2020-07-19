require('dotenv').config();
const express = require('express');
const routes = require('./routes');
// const pageNotFound = require('./routes/404');
const mongoose = require('mongoose')
const logger = require('morgan');


const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/jamesdeveloping';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//testing to see if the db has contents, if not add the seed
const Person = require('./models/Person')
Person.find({name: "James Lee"}).then(res => {
    if (res.length === 0){
        console.log('db is empty')
        Person.create(require('./seeders/projectSeeds'))
        console.log('person created')
    }
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(routes);

app.use(express.static('build'));
// app.use(pageNotFound);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on PORT ${PORT}`);
});
