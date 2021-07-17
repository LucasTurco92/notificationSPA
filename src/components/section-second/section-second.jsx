import SectionContainer from "../section-container/section-container";
import styles from "./section-second.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionSecond = () => {
  const ref = useScroll();
    return (
        <SectionContainer  color={'containerSecond'} show={true}>
          <div id={'quienes'} style={{transform:`translateY(${ref * -0.4}px)`}} className={`${common.content} ${styles.content}`}>
            <div/>
            <h3>Quienes Somos?</h3>
   
            <p>
            <img className={styles.bell} src='/images/notification.png' align="right"/> Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellentesque habitant senectus nisl, ad suscipit purus quam blandit cursus sociis. Ad tortor conubia ac posuere feugiat sem ultricies eget natoque malesuada vestibulum, pellentesque curabitur cras tempor augue felis sollicitudin mauris vulputate.
          </p>
        
          </div>
        </SectionContainer>
    )
}

export default SectionSecond;