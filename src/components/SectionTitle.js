import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = (props) => {
    return <h1 className={styles.sectionTitle}>{props.title}</h1>;
};

export default SectionTitle;
