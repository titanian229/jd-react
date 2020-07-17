import React from 'react';
import { TimelineLite } from 'gsap';
import styles from './Nav.module.scss';

import Logo from '../Logo'
import Navlink from './Navlink'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.timeline = null;
    }

    componentDidMount() {
        this.timeline = new TimelineLite({paused: true});
        this.timeline.from(
            this.element,
            {
                delay: 7,
                duration: 0.7,
                x: -110,
                opacity: 0,
                ease: 'circ',
            },
            'name',
        );
        this.timeline.play()
    }

    click(event) {
        console.log(event)
    }

    render() {
        return (
            <nav className={styles.nav} ref={nav => this.element = nav}>
                <div>
                    <Logo />
                    <Navlink name="About Me" url="#about" />
                    <Navlink name="My Projects" url="#projects" />
                    <Navlink name="Get in touch" url="#contact" />
                </div>
                
                {/* <ul> */}
                    {/* <Logo className={styles.logo} /> */}
                    {/* <li className="logo">
                        J<span>T</span>L
                    </li> */}
                    {/* <li>About Me</li> */}
                    {/* <li>My Projects</li> */}
                    {/* <li>Get in touch</li> */}
                {/* </ul> */}
            </nav>
        );
    }
}

export default Nav;
