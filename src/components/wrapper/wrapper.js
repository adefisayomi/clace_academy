import Header from './header'
import styles from './styles/wrapper.module.scss'
import Footer from '../nav/footer'
import Nav from '../nav/nav'


export default function Wrapper ({children}) {

    return (
        <div className= {styles.wrapper}>
            <Header />

            <div className= {styles.wrapper_header}>
                <Nav />
            </div>
            <div className= {styles.wrapper_content}> {children} </div>
            <div className= {styles.wrapper_footer}>
                <Footer />
            </div>

        </div>
    )
}