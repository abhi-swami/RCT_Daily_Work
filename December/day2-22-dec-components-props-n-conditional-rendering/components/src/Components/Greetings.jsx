import styles from "./Greetings.module.css"
export default function Greetings(){
    console.log(styles)
    return(
        <>
        <h1>Greetings, Eartinglings</h1>
        <h3 className={styles.App} >Hello This belongs to Greetings</h3>
        </>
    )
}