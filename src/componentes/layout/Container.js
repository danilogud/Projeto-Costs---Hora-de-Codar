import styles from './Container.module.css'
{// todos os routes que estiverem dentro do container serão encaixados dentro desta div. é o encapsulamento
}
function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>    
    )
}

export default Container