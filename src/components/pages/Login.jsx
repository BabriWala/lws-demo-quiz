import Illustration from "../Illustration";
import img from '../../assets/images/login.svg';
import LoginForm from "../LoginForm";
import styles from '../../styles/login.module.css'

export default function Login(){
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration imgURL={img} alternativeText="Login"></Illustration>
                <LoginForm className={styles.login}></LoginForm>
            </div>
        </>
    )
}