import SectionContainer from "../section-container/section-container";
import styles from "./section-fourth.module.scss";
import common from '../section-container/section-container.module.scss';
const SectionFourth = () => {
    return (
    <SectionContainer color={'containerFourth'} show={true}>
      <div id={'contacto'}  className={`${common.content} ${styles.content}`}>
      <img className={styles.hands} src='/images/hand-shake.png'/>
        <ul>
          <li>
          Lorem Ipsum
          </li>
          <li>
          Lorem Ipsum
          </li>
          <li>
          Lorem Ipsum
          </li>
        </ul>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
    
      </div>
    </SectionContainer>
    )
}

export default SectionFourth;