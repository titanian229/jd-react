const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    bio: [],
    cta: String,
    skills: [],
    github: String,
    linkedin: String,
    email: String,
    imgPrimary: String,
    imgAlt: String,
    resume: String,
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
