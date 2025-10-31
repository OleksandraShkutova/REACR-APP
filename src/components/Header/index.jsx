//умовний рендеринг
import logo from './logo.jpg'
import userIcon from './user-icon.png'
import styles from './Header.module.css'

console.log(styles);
function Header (props){
    const { isLogin } = props;
    
    //if (isLogin){
    //    return <img src={userIcon} alt='' />
    //}
    //return <button>Login</button>

    return (
        <header className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo' />
            {isLogin ? (<img className={styles.userImg} src={userIcon} alt='' />
        ) : (
            <div>
                <button className={styles.btn}>Login</button>
                <button className={styles.btn}>Registration</button>
            </div>
        )}
        </header>
    )
    //якщо не вся розмітка, тобто false = null, нічо не потрібно виводити
    //return <header>{isLogin && <img src={userIcon} alt='' />}</header>
}

export default Header