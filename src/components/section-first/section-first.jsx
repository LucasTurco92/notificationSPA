import SectionContainer from "../section-container/section-container";
import styles from './section-first.module.scss';
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionFirst = () => {
    const ref = useScroll();

    return (
        <SectionContainer className={styles.containerFirst}  color={'containerFirst'} show={false}> 
            <div style={{transform:`translateY(${ref * -0.5}px)`}} id={'intro'} className={`${common.content} ${styles.content}`}>
                <h2 className={styles.title}>Notify</h2>        
                    <img className={styles.hermes} src='/images/hermes.png'/>
                <span className={styles.legend}>"Notifica tranquilo, nosotros nos encargamos."</span>   
                <img  className={styles.temple} src='/images/temple.png'/>
            </div>
        </SectionContainer>
    )
}

export default SectionFirst;