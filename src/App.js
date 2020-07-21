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

function App() {
    let [{ data, loading, error }] = useAxios('/api/James%20Lee');

    if (loading) return <p>Loading...</p>;
    if (error) {
        data = require('./testingData/james')
    }

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
