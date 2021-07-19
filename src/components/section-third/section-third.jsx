import SectionContainer from "../section-container/section-container";
import styles from "./section-third.module.scss";
import common from '../section-container/section-container.module.scss';
import useScroll from '../../hooks/scroll.js';

const SectionThird = () => {
  const ref = useScroll();

    return (
      <SectionContainer color={'containerFirst'} show={true}>
        <div id={'mision'} className={`${common.content} ${styles.content}`}>
            <h3 className={styles.title}>Misión</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar maecenas cursus, pellentesque dapibus sociosqu feugiat mollis sodales aliquam velit taciti, enim curabitur laoreet tempor lacinia interdum porttitor convallis diam. Hac quisque pharetra malesuada nam pretium potenti vehicula magna, laoreet mattis vivamus sollicitudin non pellentesque habitant senectus nisl, ad suscipit purus quam blandit cursus sociis. Ad tortor conubia ac posuere feugiat sem ultricies eget natoque malesuada vestibulum, pellentesque curabitur cras tempor augue felis sollicitudin mauris vulputate.</p>
          <img style={{transform:`translate(${ref * -0.04}px,${ref * -0.04}px)`}} className={styles.lawyer} src='/images/lawyer.png'/>
        </div>
    </SectionContainer>
    )
}

export default SectionThird;