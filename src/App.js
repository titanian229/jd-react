import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
// import Nav from './components/Nav/Nav'
import Container from './components/Container';
import SectionTitle from './components/SectionTitle';
// import Skills from './components/Skills';
import About from './components/About'

import './styles/global.scss';

const skills = [
    ['HTML5', 'CSS3', 'JavaScript ES6', 'Python', 'SQL', 'Git', 'MongoDB / Express / React / Node.js (MERN) Stack'],
    ['Handlebars.js', 'Bootstrap', 'Semantic UI', 'Sass'],
];

const bio = `Hello, I'm James Lee. I'm a full stack web developer,
            based in Toronto. I'm focused on clean, efficient, and easily expandable code.

            I first encountered programming by exploring it myself, creating software to automate my
            life and work and improve the things I encountered day to day. Mapping and planning the
            routes I kayak, automating the bulky process of creating GCal events around work schedules,
            android applications to take my software on the go with me. I taught myself by exploring
            documentation, picking things apart and playing with new ways to code and new design
            patterns. I found my passion in it. I’m always growing my skill set taking online and
            physical classes, most recently a University of Toronto coding bootcamp.`;

const cta = `Contact me, and let’s see how we can put my passion to work for you.`;

function App() {
    return (
        <div className="App">
            <Welcome />
            {/* <Nav /> */}
            <Container>
                <SectionTitle title="About" />
                {/* <Skills skills={skills} /> */}
                <About
                    name="James Lee"
                    bio={bio}
                    cta={cta}
                    skills={skills}
                    github="https://github.com/titanian229"
                    linkedin="https://www.linkedin.com/in/jamestlee221/"
                    email="james@jamestlee.ca"
                    img="JamesLeeOp.png"
                />

                {/* <div id="about-container">
                    <div>
                        <p>
                            Hello, I'm <span className="highlight">James Lee</span>. I'm a full stack web developer,
                            based in Toronto. I'm focused on clean, efficient, and easily expandable code.
                        </p>
                        <p>
                            I first encountered programming by exploring it myself, creating software to automate my
                            life and work and improve the things I encountered day to day. Mapping and planning the
                            routes I kayak, automating the bulky process of creating GCal events around work schedules,
                            android applications to take my software on the go with me. I taught myself by exploring
                            documentation, picking things apart and playing with new ways to code and new design
                            patterns. I found my passion in it. I’m always growing my skill set taking online and
                            physical classes, most recently a University of Toronto coding bootcamp.
                        </p>
                        <p>Contact me, and let’s see how we can put my passion to work for you.</p>
                        <div className="contact">
                            <a href="https://github.com/titanian229">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jamestlee221/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:james@jamestlee.ca">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src="./images/JamesLeeOp.png" alt="James Lee" />
                    </div>
                </div> */}
                <SectionTitle title="My Projects" />
                <div id="projects-container"></div>
                <SectionTitle title="Contact Me" />
                <div id="contact-container">
                    <div>
                        <img src="./images/jamesAndMouse.jpg" alt="James Lee" />
                    </div>
                    <div>
                        <p>
                            You can reach me at <a href="mailto:james@jamestlee.ca">james@jamestlee.ca</a>
                        </p>
                        <p>
                            Find me on <a href="https://www.linkedin.com/in/jamestlee221/">LinkedIn</a>
                        </p>
                        <p>
                            See my work on <a href="https://github.com/titanian229">GitHub</a>
                        </p>
                        <p>
                            Download my{' '}
                            <a href="./images/JamesLeeResume.pdf" download>
                                resume
                            </a>
                        </p>
                    </div>
                </div>
                <footer>&copy; 2020 James T Lee</footer>
            </Container>
        </div>
    );
}

export default App;
