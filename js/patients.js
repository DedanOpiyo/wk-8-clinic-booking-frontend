import { fetchData, postData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('patient-form');
  const patientsList = document.getElementById('patients-list');

  async function loadPatients() {
    const patients = await fetchData('/api/patients');
    patientsList.innerHTML = '';

    if (!patients || patients.length === 0) {
      patientsList.innerHTML = '<p>No patients found.</p>';
      return;
    }

    patients.forEach((pat) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p><strong>Name:</strong> ${pat.name}</p>
        <p><em>ID:</em> ${pat.id}</p>
        <hr>
      `;
      patientsList.appendChild(div);
    });
  }

  await loadPatients();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newPatient = {
      name: document.getElementById('name').value.trim()
    };

    const result = await postData('/api/patients', newPatient);

    if (result && result.id) {
      alert('Patient registered successfully!');
      form.reset();
      await loadPatients();
    } else {
      alert('Failed to register patient.');
    }
  });
});
