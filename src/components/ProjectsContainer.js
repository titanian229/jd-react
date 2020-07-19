import React from 'react'
import Project from './Project'
import styles from './ProjectsContainer.module.scss'


const ProjectsContainer = (props) => {
    return (
        <div className={styles.projectsContainer}>
            {props.projectsList.map((projectInfo, index) => <Project key={String(index) + projectInfo.name} projectInfo={projectInfo} />)}
        </div>
    )
}

export default ProjectsContainer;
