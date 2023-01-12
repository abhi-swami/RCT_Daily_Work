
import styles from "./Form.module.css"

export default function From({onSubmit,children,title}){
    return(
        <div>
            <form className={styles.myForm} onSubmit={onSubmit}>
                <h3>{title}</h3>
                {children}
            <div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>
        </div>
    )
}