import React from 'react';
import Link from 'next/link';
import styles from "./About.module.css";


const About = () => {
    return (
        <div className={styles.background}>
            <div className={styles.layer}>
            <div className={styles.container}>
            <Link href="/"><button className={styles.back}>Back</button></Link>
                <div>
                    <p className={styles.title}>ABOUT THE SYSTEM</p>
                </div>
               
                <div>
                    <p className={styles.content}>The Karaoke Room Monitoring system is a newly established website to assist users on monitoring occupied and vacant rooms 
                    in the place.
                    </p>
                    <p className={styles.content}>
                    Our goal is to minimize the workload of the worker that will check the rooms manually.
                    </p>
                    <p className={styles.content}>
                    Keep exploring our website and try it yourself!</p>
                </div>
                
            </div>       
        </div>
        </div>
        
        
        

    );
};

export default About;