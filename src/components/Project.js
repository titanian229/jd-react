import React from 'react';
import styles from './Project.module.scss'

const Project = (props) => {
    const {name, subtitle, description, githubLink, liveLink, imageURL, technologies} = props.projectInfo
    const image = require('../images/icons/' + imageURL)


    return (
        <div className={styles.projectCard}>
            <div className={styles.projectTitle}>
                <h2>{name}</h2>
                <img src={image} alt={name} />
            </div>
            <div className={styles.projectText}>
                <div className={styles.projectDescription}>
                    <p className={styles.projectHeadline}>{subtitle}</p>
                    <p className={styles.description}>{description}</p>
                    <ul>{technologies.map((tech, index) => <li key={index}>{tech}</li>)}</ul>
                </div>
            </div>
            <div className={styles.projectLinks}>
                {liveLink ? <a href={liveLink}><i className="fas fa-anchor"></i></a> : ''}
                {githubLink ? <a href={githubLink}><i className="fab fa-github"></i></a> : ''}
            </div>
        </div>
    );
};

export default Project;
