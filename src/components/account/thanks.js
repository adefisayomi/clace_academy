import styles from './styles/thanks.module.scss'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


export default function Thanks () {
    
    return (
        <div className= {styles.thanks}>
            <SentimentVerySatisfiedIcon id= {styles.thanks_icon} />
            <h1>
                #thanks
            </h1>
            <p>We sent a payment link to your email to complete your <span>#registration</span> </p>
            <em>we look forward to meet with you as you begin your Tailoring class</em>
            <blockquote>Dolapo oluwole</blockquote>
        </div>

    )
}