import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../../../assets/images/csea-logo.png';
import { navLinks } from '../../../constants';
import styles from './Navbar.module.css';

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    }

    return (
        <header className={styles.navbar}>
            <h3 onClick={() => { window.scrollTo(0, 0) }}>
                <img src={logo} alt='logo' className={styles.nav_logo} />
            </h3>
            <nav ref={navRef}>
                {navLinks.map((link) => (
                    <a href={`#${link.id}`} onClick={showNavBar}>{link.title}</a>
                ))}
                <button onClick={showNavBar} className={styles.nav_close}>
                    <p><AiOutlineClose /></p>
                </button>
            </nav>
            <div className={styles.space}></div>
            <button className={styles.nav_btn} onClick={showNavBar}>
                <p><RxHamburgerMenu /></p>
            </button>
        </header>
    )
}

export default Navbar;