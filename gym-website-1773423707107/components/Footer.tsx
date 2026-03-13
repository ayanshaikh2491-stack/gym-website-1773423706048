import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Gym Website. All rights reserved.
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/gymwebsite" target="_blank">
          <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com/gymwebsite" target="_blank">
          <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
        </a>
        <a href="https://www.twitter.com/gymwebsite" target="_blank">
          <Image src="/twitter.png" alt="Twitter" width={20} height={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;