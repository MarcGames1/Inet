import styles from './scrooltoTop.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
const ScroolToTop = () => {




    return(<>
        {/* <!-- Scroll to top start --> */}
        <a href="#">

        <div className={styles.scrollTop}>
            <FontAwesomeIcon icon ={faAngleUp}/>
        </div>
        </a>
        {/* <!-- Scroll to Top End --> */}
    </>)
}


export default ScroolToTop