import { fetchData, postData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const appointmentsList = document.getElementById('appointments-list');
  const doctorSelect = document.getElementById('doctor');
  const patientSelect = document.getElementById('patient');
  const form = document.getElementById('appointment-form');

  // Load doctors
  const doctors = await fetchData('/api/doctors');
  if (doctors) {
    console.log(doctors)
    doctors.forEach((doc) => {
      const option = document.createElement('option');
      option.value = doc.id;
      option.textContent = doc.name;
      doctorSelect.appendChild(option);
    });
  }

  // Load patients
  const patients = await fetchData('/api/patients');
  if (patients) {
    patients.forEach((pat) => {
      const option = document.createElement('option');
      option.value = pat.id;
      option.textContent = pat.name;
      patientSelect.appendChild(option);
    });
  }

  // Load appointments
  async function loadAppointments() {
    const appointments = await fetchData('/api/appointments');
    appointmentsList.innerHTML = '';

    if (!appointments || appointments.length === 0) {
      appointmentsList.innerHTML = '<p>No appointments yet.</p>';
      return;
    }

    appointments.forEach((app) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p><strong>Date:</strong> ${app.date}</p>
        <p><strong>Doctor:</strong> ${app.Doctor?.name || 'Unknown'}</p>
        <p><strong>Patient:</strong> ${app.Patient?.name || 'Unknown'}</p>
        <p><strong>Prescription:</strong> ${app.prescription}</p>
        <hr>
      `;
      appointmentsList.appendChild(div);
    });
  }

  await loadAppointments();

  // Submit new appointment
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const appointmentData = {
      date: document.getElementById('date').value,
      prescription: document.getElementById('prescription').value,
      doctor_id: parseInt(doctorSelect.value),
      patient_id: parseInt(patientSelect.value),
    };

    const result = await postData('/api/appointments', appointmentData);

    if (result && result.id) {
      alert('Appointment booked successfully!');
      form.reset();
      await loadAppointments();
    } else {
      alert('Failed to book appointment.');
    }
  });
});
