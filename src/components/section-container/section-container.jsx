import styles from "./section-container.module.scss";
import Wave from "../wave/wave.jsx";
const SectionContainer = (props) => {
  const { children,show,color,id } = props;
  return (
    <div id={id} className={styles[color]}>
        { 
        show &&
            <Wave color={color}/>
        }
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default SectionContainer;
