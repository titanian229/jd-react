import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Welcome.module.scss';
import astronaut from '../images/astronaut.png';
import earth from '../images/earth.png';

// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//         this.earth = null;
//         this.astronaut = null;
//         this.h1 = null;
//         this.timeline = null;
//     }

//     componentDidMount() {
//         this.timeline = new TimelineLite({ paused: true });
//         this.timeline
//             .to(
//                 this.earth,
//                 4,
//                 {
//                     delay: 3,
//                     duration: 4,
//                     y: '80vh',
//                     opacity: 0,
//                     ease: 'sine.in',
//                 },
//                 'earthFade'
//             )
//             .from(
//                 this.astronaut,
//                 {
//                     delay: 3,
//                     duration: 4,
//                     css: { scale: 0.4 },
//                     ease: 'power1.inOut',
//                 },
//                 'earthFade'
//             )
//             .from(
//                 this.h1,
//                 {
//                     duration: 0.7,
//                     x: 110,
//                     opacity: 0,
//                     ease: 'circ',
//                 },
//                 'name'
//             );
//         this.timeline.play()
//         // this.timeline.from(
//         //     'nav',
//         //     {
//         //         delay: 0,
//         //         duration: 0.7,
//         //         x: -110,
//         //         opacity: 0,
//         //         ease: 'circ',
//         //     },
//         //     'name'
//         // );
//     }

//     render() {
//         return (
//             <div id="welcome-container" className={styles.welcome}>
//                 <img
//                     id="astronaut"
//                     className={styles.astronaut}
//                     src={astronaut}
//                     alt="Astronaut"
//                     ref={(img) => (this.astronaut = img)}
//                 />
//                 <img id="earth" className={styles.earth} src={earth} alt="earth" ref={(img) => (this.earth = img)} />
//                 <h1 ref={(h1) => (this.h1 = h1)}>
//                     <span className={styles.first}>James</span>
//                     <br />
//                     <span className={styles.midlight}>Lee</span>
//                 </h1>
//             </div>
//         );
//     }
// }

const Welcome = () => {
    let astroEl = useRef(null);
    let earthEl = useRef(null);
    let nameEl = useRef(null);

    useEffect(() => {

        let timeline = gsap.timeline({ paused: true });
        timeline
        .to(
            earthEl,
            4,
            {
                delay: 3,
                duration: 4,
                y: '80vh',
                opacity: 0,
                ease: 'sine.in',
            },
            'earthFade'
        )
        .from(
            astroEl,
            {
                delay: 3,
                duration: 4,
                css: { scale: 0.4 },
                ease: 'power1.inOut',
            },
            'earthFade'
        )
        .from(
            nameEl,
            {
                duration: 0.7,
                x: 110,
                opacity: 0,
                ease: 'circ',
            },
            'name'
        );
        timeline.play();
    });

    return (
        <div id="welcome-container" className={styles.welcome}>
            <img
                id="astronaut"
                className={styles.astronaut}
                src={astronaut}
                alt="Astronaut"
                ref={(img) => (astroEl = img)}
            />
            <img id="earth" className={styles.earth} src={earth} alt="earth" ref={(img) => (earthEl = img)} />
            <h1 ref={(h1) => (nameEl = h1)}>
                <span className={styles.first}>James</span>
                <br />
                <span className={styles.midlight}>Lee</span>
            </h1>
        </div>
    );
};

export default Welcome;
