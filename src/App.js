import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
// import Nav from './components/Nav/Nav'
import Container from './components/Container';
import SectionTitle from './components/SectionTitle';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useAxios from 'axios-hooks';

import './styles/global.scss';

// const skills = [
//     ['HTML5', 'CSS3', 'JavaScript ES6', 'Python', 'SQL', 'Git', 'MongoDB / Express / React / Node.js (MERN) Stack'],
//     ['Handlebars.js', 'Bootstrap', 'Semantic UI', 'Sass'],
// ];

// const bio = `Hello, I'm James Lee. I'm a full stack web developer,
//             based in Toronto. I'm focused on clean, efficient, and easily expandable code.

//             I first encountered programming by exploring it myself, creating software to automate my
//             life and work and improve the things I encountered day to day. Mapping and planning the
//             routes I kayak, automating the bulky process of creating GCal events around work schedules,
//             android applications to take my software on the go with me. I taught myself by exploring
//             documentation, picking things apart and playing with new ways to code and new design
//             patterns. I found my passion in it. I’m always growing my skill set taking online and
//             physical classes, most recently a University of Toronto coding bootcamp.`;

// const cta = `Contact me, and let’s see how we can put my passion to work for you.`;
// const bio = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'bio.json')))
// const cta = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'cta.json')))
// const skills = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'skills.json')))
// const projectsList = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'projects.json')))

const bio = [
    "Hello, I'm James Lee. I'm a full stack web developer, based in Toronto. I'm focused on clean, efficient, and easily expandable code.",

    'I first encountered programming by exploring it myself, creating software to automate my life and work and improve the things I encountered day to day. Mapping and planning the routes I kayak, automating the bulky process of creating GCal events around work schedules, android applications to take my software on the go with me. I taught myself by exploring documentation, picking things apart and playing with new ways to code and new design patterns. I found my passion in it. I’m always growing my skill set taking online and physical classes, most recently a University of Toronto coding bootcamp.',
];
const cta = 'Contact me, and let’s see how we can put my passion to work for you.';

const skills = [
    ['HTML5', 'CSS3', 'JavaScript ES6', 'Python', 'SQL', 'Git', 'MongoDB / Express / React / Node.js (MERN) Stack'],
    ['Handlebars.js', 'Bootstrap', 'Semantic UI', 'Sass'],
];
const projectsList = [
    {
        name: 'EcoRoute',
        subtitle: 'Find your way from A to B while minimizing your carbon footprint! ',
        description:
            'A web application for planning and mapping routes, that displays carbon contributions from each. ',
        githubLink: 'https://github.com/titanian229/EcoRoute',
        liveLink: 'https://go-ecoroute.com',
        imageURL: 'EcoRouteTall.jpg',
        technologies: ['JavaScript', 'HTML/CSS', 'HERE Mapping/Routing API', 'OpenWeatherMap API', 'Bootstrap'],
    },
    {
        name: 'PageExchange',
        subtitle: 'Find a new life for your old books',
        description:
            'Node/Express based web application, a communal library for sharing and exchanging books acros the internet.  Has a built in messaging system and uses Auth0 authenticated accounts',
        imageURL: 'PageExchange.png',
        githubLink: 'https://github.com/titanian229/TheSemicolons',
        liveLink: 'https://obscure-stream-03506.herokuapp.com/',
        technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Handlebars', 'Express', 'Auth0/PassportJS', 'MySQL'],
    },
    {
        name: 'JamesDeveloping.ca',
        subtitle: 'My personal webpage',
        description:
            'Node/Express based server, using handlebars templating.  I wanted something that would write the page for me, so portfolio projects are loaded from a database I add to, instead of being individually created in HTML.  Styling is with Sass, and animations are created either in plain CSS or using GreenSocks.',
        imageURL: 'JamesDeveloping.jpg',
        githubLink: 'https://github.com/titanian229/PersonalPageNodeExpress',
        liveLink: 'https://jamesdeveloping.ca',
        technologies: ['JavaScript', 'HTML', 'Sass', 'Node.js', 'Handlebars', 'Express'],
    },
    {
        name: 'ScheduleCreator',
        subtitle: 'Enter your work schedule on mobile or desktop',
        description:
            "Application that provides a simple way to create many Google Calendar events based on a week's shift schedule, while logging expected pay and shift information to a SQL database. Easily accessed with through an android application or a command line interface.",
        githubLink: 'https://github.com/titanian229/schedule-creator-public',
        liveLink: '',
        imageURL: 'scheduler1.jpg',
        technologies: ['Python', 'Kivy', 'Google Calendar API', 'SQLite'],
    },
    {
        name: 'Weather Dashboard',
        subtitle: 'See weather conditions, to plan your trips or just your day',
        description:
            'Weather dashboard for easily checking conditions in multiple cities, using the OpenWeatherMap API',
        githubLink: 'https://github.com/titanian229/homework06',
        liveLink: 'https://titanian229.github.io/homework06',
        imageURL: 'weather-dashboard.jpg',
        technologies: ['HTML/CSS', 'JavaScript', 'OpenWeatherMap API'],
    },
    {
        name: 'Workday Scheduler',
        subtitle: 'Quickly plan out your day',
        description:
            'A simple proof of concept using local storage to plan out a workday in a layout that responds to the time.',
        githubLink: 'https://github.com/titanian229/workdayScheduler',
        liveLink: 'https://titanian229.github.io/workdayScheduler',
        imageURL: 'workday-scheduler.jpg',
        technologies: ['HTML/CSS', 'JavaScript', 'Moment.js'],
    },
    {
        name: 'Coding Quiz',
        subtitle: 'See how you measure up in your Javascript knowledge',
        description:
            'A timed quiz that tests you on the basics of Javascript then shows you how you compare to others.',
        githubLink: 'https://github.com/titanian229/homework04',
        liveLink: 'https://titanian229.github.io/homework04',
        imageURL: 'javascript-quiz.jpg',
        technologies: ['HTML/CSS', 'JavaScript'],
    },
    {
        name: 'Password Generator',
        subtitle: 'Easily generate a password to fit your requirements',
        description:
            'A javascript based password generator that takes requirements and randomly creates passwords of a given length.',
        githubLink: 'https://github.com/titanian229/homework03',
        liveLink: 'https://titanian229.github.io/homework03',
        imageURL: 'password-generator.jpg',
        technologies: ['HTML/CSS', 'JavaScript'],
    },
    {
        name: 'TC-Tools',
        subtitle:
            "Manage ecomm orders from multiple vendors, easily deal with conflicting vendor's item databases on the go",
        description:
            'An android application built using Python, SQLite and the Google Sheets API, for tracking orders and converting item numbers',
        githubLink: 'https://github.com/titanian229/tc-tools-public',
        liveLink: '',
        imageURL: 'tc-main.png',
        technologies: ['Python', 'Kivy', 'SQLite', 'Google Sheets API'],
    },
];

function App() {
    const [{ data, loading, error }, refetch] = useAxios('/api/James%20Lee');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const { name, bio, cta, skills, github, linkedin, email, imgPrimary, imgAlt, resume, projects } = data;

    return (
        <div className="App">
            <Welcome />
            {/* <Nav /> */}
            <Container>
                <SectionTitle title="About" />
                <About
                    name={name}
                    bio={bio}
                    cta={cta}
                    skills={skills}
                    github={github}
                    linkedin={linkedin}
                    email={email}
                    img={imgPrimary}
                />
                <SectionTitle title="My Projects" />
                <ProjectsContainer projectsList={projects} />
                <SectionTitle title="Contact Me" />
                <Contact image={imgAlt} name={name} email={email} github={github} linkedin={linkedin} resume={resume} />
                <Footer />
            </Container>
        </div>
    );
}

export default App;
