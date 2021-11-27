import styles from './styles/nav.module.scss'
import Link from 'next/link'
import DashboardIcon from '@material-ui/icons/Dashboard';
import IconButton from '@material-ui/core/IconButton';


export default function Nav () {

    return (
        <nav className= {styles.nav}>
            <span className= {styles.nav_logo}>
                clace
            </span>

            <span className= {styles.nav_list}>
                <ul>
                    <li> <Link href= '/'><a>home</a></Link> </li>
                    <li> <Link href= '/about'><a>about</a></Link> </li>
                    <li> <Link href= '/contact'><a>contact</a></Link> </li>
                </ul>
            </span>

            <IconButton id= {styles.nav_icon} aria-label="dashboard" component="span">
                <DashboardIcon id= {styles.nav_icon}/>
            </IconButton>
        </nav>
    )
}