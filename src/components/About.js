import React from 'react';
import reactStringReplace from 'react-string-replace';
import useAxios from 'axios-hooks'

import styles from './About.module.scss';
import Skills from './Skills';

const Bio = (props) => {

    
    return props.bio.map((paragraph, index) => (
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
        <div className={styles.contact}>
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
    const [{data, loading, error}, refetch] = useAxios('/api/James%20Lee/about')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    const {skills, bio, cta, linkedin, github, email, imgPrimary, name} = data;


    return (
        <>
            <Skills skills={skills} />
            <div className={styles.container}>
                <div className={styles.bioSection}>
                    <Bio bio={bio} name={name} />
                    <p>{cta}</p>
                    <Contact github={github} linkedin={linkedin} email={email} />
                </div>
                <div className={styles.photoSection}>
                    <img src={require(`../images/${imgPrimary}`)} alt={name} />
                </div>
            </div>
        </>
    );
};

export default About;
