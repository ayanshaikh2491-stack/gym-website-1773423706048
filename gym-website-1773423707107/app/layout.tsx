import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..900,0..1,-50..200" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;