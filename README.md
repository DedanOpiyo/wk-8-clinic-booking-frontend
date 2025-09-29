# Clicin Booking System 
The project is a demonstration of key pillars of JS.  
It a static multipage frontend website that fetches data from your Node.js backend APIs. 
Deploy backend on Render, frontend on Vercel/Netlify.

## Project Structure
``` bash
clinic-booking-frontend/
├── index.html               # Home page
├── doctors.html             # View all doctors
├── specialties.html         # View all specialties
├── appointments.html        # View/book appointments
├── patients.html            # View/register patients
├── css/
│   └── style.css            # Main styles
├── js/
│   ├── api.js               # Central API calls
│   ├── doctors.js           # Page-specific logic
│   ├── appointments.js
│   ├── patients.js
│   ├── specialties.js
│   └── utils.js             # Helpers, e.g., form validation
├── assets/
│   └── images/              # Logos, icons, etc.
├── README.md
```
## Pages overview
### specialties.html – View All Specialties

- Lists all specialties (from the /specialties GET endpoint).
- Uses the same layout and styling for consistency.

### appointments.html – View & Book Appointments

#### Goals

1. View all appointments (GET /appointments)

2. Book a new appointment (POST /appointments)

Form fields:

- Date (input[type="date"])

- Prescription (textarea)

- Doctor (select)

- Patient (select)

3. Fetch doctor/patient options from API
