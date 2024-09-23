# Doctor Directory Application

A React-based application to list, search, filter, and manage a directory of doctors. Users can search doctors by name, filter by specialty or location, and add new doctors to the list via a modal form.

## Features

- **Search**: Search doctors by name using the search bar.
- **Filter**: Filter doctors by specialty and location.
- **Pagination**: Paginate through the list of doctors.
- **View Details**: Click on any doctor to view their details in a modal.
- **Add New Doctor**: Add new doctors to the directory through a modal form.

## Project Structure

```bash
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api                     # Placeholder for API-related files
│   │   └── index.js
│   ├── assets                   # Placeholder for assets like images or fonts
│   ├── components               # Contains React components
│   │   ├── AddDoctorForm.js     # Form component for adding a new doctor
│   │   ├── Banner.js
│   │   ├── DoctorCard.js
│   │   ├── DoctorModal.js
│   │   ├── FilterBar.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── SearchBar.js
│   ├── Data                     # Contains static JSON data
│   │   └── index.json           # Static JSON file with doctor data
│   ├── pages                    # Contains main pages for the app
│   │   └── DoctorListPage.js    # Main page for listing doctors
│   ├── App.css                  # Global styles
│   ├── App.js                   # Main App component
│   ├── index.css                # Additional styling
│   ├── index.js                 # Entry point of the React app
│   ├── logo.svg                 # Logo for the app
│   ├── reportWebVitals.js       # Performance measurement for the app
│   ├── setupTests.js            # Test setup
├── .gitignore                   # Ignored files in version control
├── package-lock.json            # Lockfile for npm dependencies
├── package.json                 # Dependencies and scripts
└── README.md                    # This README file
