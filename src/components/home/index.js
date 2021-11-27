import styles from './index.module.scss'
import Thanks from '../account/thanks'
import {GlobalState} from '../../context/globlalContext'
import Signup from '../account/signup'


export default function index () {

    const {name} = GlobalState()

    return (
        <div className= {styles.index}>
            <span className= {styles.index_bg}></span>
            <span className= {styles.index_form}>
                {
                    name ? <Thanks /> : <Signup />
                }
            </span>
        </div>
    )
}