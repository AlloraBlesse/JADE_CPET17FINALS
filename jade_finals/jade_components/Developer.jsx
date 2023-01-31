import styles from "./Developer.module.css"
import Link from 'next/link';

const Developers = () => {
    return (
        <div className={styles.container}> 
            <Link href="/"><button className={styles.back}>Back</button></Link>
            <div className={styles.top_label}>
                <h2 className={styles.title}>THE DEVELOPERS</h2>
                <br></br>
            </div>
            <div className={styles.arrangement}>
                <div className={styles.card}>
                    <img src="/images/allora.png" height ="180" width="158"/><br></br>
                    <label className={styles.name}>ALLORA BLESSE LAGURA</label><br></br>
                    <label className={styles.position}>Project Manager</label>
                </div>
                <div className={styles.card}>
                    <img src="/images/dana.png" height ="180" width="175"/><br></br>
                    <label className={styles.name}>DANA GRACE FULLA</label><br></br>
                    <label className={styles.position}>UI/UX Manager</label>
                </div>
                <div className={styles.card}>
                    <img src="/images/eunis.png" height ="180" width="175"/><br></br>
                    <label className={styles.name}>TRISHA EUNIS ELICOT</label><br></br>
                    <label className={styles.position}>Frontend Developer</label>
                </div>
            </div>
            <div className={styles.arrangement2}>
                <div></div>
                <div className={styles.card}>
                    <img src="/images/jaz.png" height ="180" width="170"/><br></br>
                    <label className={styles.name}>JAZMINN AIRA TERENCIO</label><br></br>
                    <label className={styles.position}>Backend Developer</label>
                </div>
                <div className={styles.card}>
                    <img src="/images/jat.png" height ="180" width="178"/><br></br>
                    <label className={styles.name}>JATSEN GESTA</label><br></br>
                    <label className={styles.position}>Backend Developer</label>
                </div>
                <div></div>
            </div>

        </div>


    );
};

export default Developers;