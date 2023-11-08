import styles from './Home.module.css';
import { Interview, CSEALogo } from '../../../assets';
import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <h3>CSEA Placement Experiences</h3>
        <h2>One stop web portal for enhancing your placement preparation!</h2>
        <h2>Interview Experiences of ambitious students from College of Engineering Guindy, curated into a website for your own benefit.</h2>
      </div>
      <div className={styles.header_img}>
        <img src={Interview} alt='Home page Logo' />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about_left}>
        <motion.img animate={{ y: [0, 50, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease:'easeInOut' }} src={CSEALogo} alt='Home page Logo' />
      </div>
      <div className={styles.about_right}>
        <div className={styles.about_titles}>
          <div className={styles.about_title}>
            <p>Learn more about us</p>
            <p></p>
          </div>
          <p className={styles.about_csea}>CSEA CEG</p>
        </div>
        <p className={styles.about_desc}>The Computer Science and Engineering Association (CSEA) of College of Engineering Guindy is an association with a legacy of more than 10 years, established for the primary goal of Knowledge Advancement. Being the brainchild of Department of Computer Science and Engineering (DCSE) of CEG, one of the oldest engineering colleges of the country, the association ensures that the role of technocrats and specialists in various industries is implied. It extends to develop and promote the progression of Computer Science and technologies to its students as well as the members of the global community through its rich alumni support. Comprising students and faculty, CSEA is one of the most active Engineering Associations in the city.</p>
        <ul className={styles.about_list}>
          <li><TiTick /><span>We Code</span></li>
          <li><TiTick /><span>We Create</span></li>
          <li><TiTick /><span>We Learn</span></li>
          <li><TiTick /><span>We Teach</span></li>
        </ul>
        <button>Learn More</button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <About />
    </div>
  )
}

export default Home;