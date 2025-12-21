
import styles from './Home.module.css';
import ThemeTest from '../Component/ThemeTest';
import ChangeLanguage from '../Component/ChangeLanguage';
const HomePage = () => {
    return ( <div className={styles.homePage}>
        <ThemeTest/>
        <hr />
        <ChangeLanguage/>
    </div> );
}
 
export default HomePage;