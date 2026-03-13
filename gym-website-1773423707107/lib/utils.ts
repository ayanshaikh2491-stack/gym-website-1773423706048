const baseUrl = 'https://api.example.com';

const api = {
  fetchClasses: () => fetch(`${baseUrl}/classes`),
  fetchMemberships: () => fetch(`${baseUrl}/memberships`),
  fetchContact: () => fetch(`${baseUrl}/contact`),
};

export default api;