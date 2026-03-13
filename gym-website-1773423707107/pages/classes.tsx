import Head from 'next/head';
import styles from '../styles/Classes.module.css';
import api from '../lib/utils';

const ClassesPage = () => {
  const [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    api.fetchClasses()
      .then(response => response.json())
      .then(data => setClasses(data.classes))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Classes</title>
      </Head>

      <h1>Gym Classes</h1>
      <ul>
        {classes.map((classItem, index) => (
          <li key={index}>{classItem.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassesPage;