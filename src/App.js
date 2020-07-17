import React from 'react';
import './App.css';
import Welcome from './components/Welcome'

function App() {
    return (
        <div className="App">
            <Welcome />
            <nav>
                <ul>
                    <li className="logo">
                        J<span>T</span>L
                    </li>
                    <li id="about">About Me</li>
                    <li id="portfolio">My Projects</li>
                    <li id="contact">Get in touch</li>
                </ul>
            </nav>
            <div id="content">
                <h1 id="about-title" className="section-title">
                    About
                </h1>
                <div className="main-container">
                    <div id="skills">
                        <p>
                            HTML5 <span className="circle"></span> CSS3 <span className="circle"></span>{' '}
                            JavaScript&nbsp;ES6 <span className="circle"></span> Python <span className="circle"></span>{' '}
                            SQL <span className="circle"></span> Git
                            <span className="circle"></span>
                            MongoDB&nbsp;/&nbsp;Express&nbsp;/&nbsp;React&nbsp;/&nbsp;Node.js&nbsp;(MERN)&nbsp;Stack
                        </p>
                        <p>
                            Handlebars.js <span className="circle"></span> Bootstrap <span className="circle"></span>{' '}
                            Sass
                        </p>
                        <p>hello</p>
                    </div>

                    <div id="about-container">
                        <div>
                            <p>
                                Hello, I'm <span className="highlight">James Lee</span>. I'm a full stack web developer,
                                based in Toronto. I'm focused on clean, efficient, and easily expandable code.
                            </p>
                            <p>
                                I first encountered programming by exploring it myself, creating software to automate my
                                life and work and improve the things I encountered day to day. Mapping and planning the
                                routes I kayak, automating the bulky process of creating GCal events around work
                                schedules, android applications to take my software on the go with me. I taught myself
                                by exploring documentation, picking things apart and playing with new ways to code and
                                new design patterns. I found my passion in it. I’m always growing my skill set taking
                                online and physical classes, most recently a University of Toronto coding bootcamp.
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
                    </div>
                </div>
                <h1 id="portfolio-title" className="section-title">
                    My Projects
                </h1>
                <div className="main-container">
                    <div id="projects-container"></div>
                </div>
                <h2 id="contact-title" className="section-title">
                    Contact Me
                </h2>
                <div className="main-container">
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
                </div>
                <footer>&copy; 2020 James T Lee</footer>
            </div>
        </div>
    );
}

export default App;
