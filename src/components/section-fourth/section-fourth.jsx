import SectionContainer from "../section-container/section-container";
import styles from "./section-fourth.module.scss";
import common from '../section-container/section-container.module.scss';

const SectionFourth = () => {

    return (
    <SectionContainer color={'containerFourth'} show={true}>
      <div  id={'contacto'}  className={`${common.content} ${styles.content}`}>
      <img className={styles.hands} src='/images/hand-shake.png'/>
        <ul>
          <li>
          ####-####
          </li>
          <li>
          Buenos Aires, Argentina
          </li>
          <li>
          Lorem Ipsum S.A
          </li>
        </ul>
        <span className={styles.legend}>"Notifica tranquilo, nosotros nos encargamos."</span>   
        <img className={styles.hermes} src='/images/hermes.png'/>
      </div>
    </SectionContainer>
    )
}

export default SectionFourth;