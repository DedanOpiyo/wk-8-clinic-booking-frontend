import { fetchData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('doctors-list');
  const doctors = await fetchData('/api/doctors');

  if (!doctors || doctors.length === 0) {
    container.innerHTML = '<p>No doctors found.</p>';
    return;
  }

  container.innerHTML = '';
  doctors.forEach((doc) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${doc.name}</h3>
      <p><strong>Specialty:</strong> ${doc.Specialty?.name || 'Unknown'}</p>
    `;
    container.appendChild(div);
  });
});
