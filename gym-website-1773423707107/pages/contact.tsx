import Head from 'next/head';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get in Touch</title>
      </Head>

      <h1>Get in Touch</h1>
      <p>Contact us today!</p>
    </div>
  );
};

export default ContactPage;