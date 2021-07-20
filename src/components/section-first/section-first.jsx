import SectionContainer from "../section-container/section-container";
import styles from './section-first.module.scss';
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionFirst = () => {
    const ref = useScroll();

    return (
        <SectionContainer className={styles.containerFirst}  color={'containerFirst'} show={false}> 
        <img style={{transform:`translateY(${ref *  0.4}px)`}} className={styles.cloud2} src='/images/cloud-2.png'/>
            <div style={{transform:`translateY(${ref * -0.5}px)`}} id={'intro'} className={`${common.content} ${styles.content}`}>
            <img style={{transform:`translateY(${ref * 1.4}px)`}} className={styles.cloud1} src='/images/cloud-1.png'/>
                <h2 className={styles.title}>Notify</h2>        
                    <img className={styles.hermes} src='/images/hermes.png'/>
                <span className={styles.legend}>"Notifica tranquilo, nosotros nos encargamos."</span>   
            </div>
            <img style={{transform:`translateY(${ref * -0.8}px)`}} className={styles.temple} src='/images/temple.png'/>
        </SectionContainer>
    )
}

export default SectionFirst;