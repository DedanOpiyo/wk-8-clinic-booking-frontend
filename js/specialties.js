import { fetchData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('specialties-list');
  const specialties = await fetchData('/api/specialties');

  if (!specialties || specialties.length === 0) {
    container.innerHTML = '<p>No specialties found.</p>';
    return;
  }

  container.innerHTML = '';
  specialties.forEach((specialty) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${specialty.name}</h3>
      <p><em>ID: ${specialty.id}</em></p>
    `;
    container.appendChild(div);
  });
});
