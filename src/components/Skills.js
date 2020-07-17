import React from 'react';
import styles from './Skills.module.scss';

const Skills = (props) => {
    let skillsList = props.skills;
    skillsList = skillsList.map((row) => {
        return row.map((item, index) => (
            <span key={index} className={styles.skill}>
                {item}
            </span>
        ));
    });
    skillsList = skillsList.map((row, index) => <p key={index}>{row}</p>);
    console.log(skillsList);
    return <div className={styles.skills}>{skillsList}</div>;
};

export default Skills;
