import styles from './section-container.module.scss'
const SectionContainer = (props)=>{

return(<div id={props.id} className={styles[props.color]}> {props.children}</div>)
}
export default SectionContainer;