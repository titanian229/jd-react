const { Mongoose, MongooseDocument } = require('mongoose');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    bio: [],
    cta: String,
    skills: [],
    projects: [
        {
            name: String,
            subtitle: String,
            description: String,
            githubLink: String,
            liveLink: String,
            imageURL: String,
            technologies: [],
        },
    ],
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
