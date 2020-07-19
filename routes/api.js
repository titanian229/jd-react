const Person = require('../models/Person');

module.exports = (router) => {
    router.get('/api/:name/project/:projectName', ({ params: { name, projectName } }, res) => {
        Person.find({ name: name }).then((data) =>
            res.json(data[0].projects.filter((project) => project.name === projectName))
        );
    });

    router.get('/api/:name/projects', ({ params: { name } }, res) => {
        Person.find({ name: name }).then((data) => res.json(data[0].projects));
    });

    router.get('/api/:name/about', ({ params: { name } }, res) => {
        Person.find({ name: name }).then((data) => {
            const {name, bio, cta, skills, email, github, linkedin, imgPrimary, imgAlt, resume} = data[0]
            res.json({name, bio, cta, skills, email, github, linkedin, imgPrimary, imgAlt, resume})
        }
        );
    });

    router.get('/api/:name', ({ params: { name } }, res) => {
        Person.find({ name: name }).then((data) => res.json(data[0]));
    });
};
