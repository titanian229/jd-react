import React from 'react';
import styles from './Navlink.module.scss';

function Navlink(props) {
    return (
        <div>
            <a href={props.url}>{props.name}</a>
        </div>
    );
}

export default Navlink;
