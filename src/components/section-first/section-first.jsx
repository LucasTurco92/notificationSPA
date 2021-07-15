import SectionContainer from "../section-container/section-container";
import styles from './section-first.module.scss';

const SectionFirst = () => {
    return (
        <SectionContainer className={styles.containerFirst} id={'intro'} color={'containerFirst'} show={false}>
            <h2>Notify</h2>        
            <p>Notifica tranquilo, nosotros nos encargamos.</p>
        </SectionContainer>
    )
}

export default SectionFirst;