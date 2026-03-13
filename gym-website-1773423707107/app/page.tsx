import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1>Welcome to our Gym Website!</h1>
        <p>Join us for a better you!</p>
        <div className={styles.grid}>
          <Link href="/classes">
            <a className={styles.card}>
              <h2>Classes</h2>
              <p>View our class schedules and sign up today!</p>
            </a>
          </Link>
          <Link href="/memberships">
            <a className={styles.card}>
              <h2>Memberships</h2>
              <p>Learn about our membership options and prices!</p>
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact Us</h2>
              <p>Get in touch with us today!</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;