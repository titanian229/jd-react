import React from 'react';
import reactStringReplace from 'react-string-replace';

import styles from './About.module.scss';
import Skills from './Skills';

const Bio = (props) => {
    let bioText = props.bio.split('\n\n');
    // bioText = reactStringReplace(bioText, props.name, (match) => (<span className={styles.name}>{props.name}</span>))
    // bioText = bioText.replace(props.name, <span className={styles.name}>{props.name}</span>)
    return bioText.map((paragraph, index) => (
        <p key={index}>
            {reactStringReplace(paragraph, props.name, (match) => (
                <span key={props.name + String(index)} className={styles.name}>
                    {props.name}
                </span>
            ))}
        </p>
    ));
};

const Contact = (props) => {
    return (
        <div className="contact">
            <a href={props.github}>
                <i className="fab fa-github"></i>
            </a>
            <a href={props.linkedin}>
                <i className="fab fa-linkedin"></i>
            </a>
            <a href={'mailto:' + props.email}>
                <i className="fa fa-envelope"></i>
            </a>
        </div>
    );
};

const About = (props) => {
    return (
        <>
            <Skills skills={props.skills} />
            <div className={styles.container}>
                <div className={styles.bioSection}>
                    <Bio bio={props.bio} name={props.name} />
                    <p>{props.cta}</p>
                    <Contact github={props.github} linkedin={props.github} email={props.email} />
                </div>
                <div className={styles.photoSection}>
                    <img src={require(`../images/${props.img}`)} alt={props.name} />
                </div>
            </div>
        </>
    );
};

export default About;
