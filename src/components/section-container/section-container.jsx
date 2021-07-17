import styles from "./section-container.module.scss";
import Wave from "../wave/wave.jsx"
const SectionContainer = (props) => {
  const { children,show,color,id } = props;
  return (
    <div id={id} className={styles[color]}>
        { 
        show &&
            <Wave color={color}/>
        }
      {children}
    </div>
  );
};
export default SectionContainer;
