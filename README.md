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