import Head from 'next/head';
import styles from '../styles/Memberships.module.css';
import api from '../lib/utils';

const MembershipsPage = () => {
  const [memberships, setMemberships] = React.useState([]);

  React.useEffect(() => {
    api.fetchMemberships()
      .then(response => response.json())
      .then(data => setMemberships(data.memberships))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Memberships</title>
      </Head>

      <h1>Gym Memberships</h1>
      <ul>
        {memberships.map((membership, index) => (
          <li key={index}>{membership.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MembershipsPage;