import styles from '../components/ColorDiv.module.css'

export default function ColorDiv(){
    return(
        <div className={styles['color-divider']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}