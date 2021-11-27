import styles from './styles/footer.module.scss'


export default function footer () {

    return (
        <div className= {styles.footer}>
            <p> &copy; 2021 Clace clothings academy. A property of 
                <span className= {styles.footer_label}> leading instincts</span>
            </p>
        </div>
    )
}