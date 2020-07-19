import React from 'react';
import styles from './Contact.module.scss';

const Contact = (props) => {
    return (
        <div className={styles.contactContainer}>
            <div>
                <img src={require('../images/' + props.image)} alt={props.name} />
            </div>
            <div>
                <p>
                    You can reach me at <a href={'mailto:' + props.email}>james@jamestlee.ca</a>
                </p>
                <p>
                    Find me on <a href={props.linkedin}>LinkedIn</a>
                </p>
                <p>
                    See my work on <a href={props.github}>GitHub</a>
                </p>
                <p>
                    Download my {' '}
                    <a href={'./images/' + props.resume} download>
                        resume
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
