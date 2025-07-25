// app.js

document.addEventListener('DOMContentLoaded', () => {
    loadAvailableDrivers();
    document.getElementById('booking-form').addEventListener('submit', createBooking);
});

// Fetch available drivers from the API
function loadAvailableDrivers() {
    fetch('http://localhost:8080/api/drivers/')
        .then(response => response.json())
        .then(drivers => {
            const driversList = document.getElementById('drivers-list');
            drivers.forEach(driver => {
                const li = document.createElement('li');
                li.textContent = `${driver.name} - Vehicle: ${driver.vehicle}`;
                driversList.appendChild(li);
            });
        });
}

// Create a booking by sending a POST request
function createBooking(event) {
    event.preventDefault();
    
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;

    const bookingData = {
        pickupLocation: pickup,
        dropoffLocation: dropoff,
        bookedAt: new Date().toISOString()
    };

    fetch('http://localhost:8080/api/bookings/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Booking created successfully!');
        loadAvailableDrivers();  // Refresh the driver list after booking
    })
    .catch(error => {
        console.error('Error creating booking:', error);
    });
}
function loadAdminData() {
    // Fetch drivers
    fetch('http://localhost:8080/admin/drivers')
        .then(response => response.json())
        .then(drivers => {
            const driversList = document.getElementById('drivers-list');
            drivers.forEach(driver => {
                const li = document.createElement('li');
                li.textContent = `${driver.name} - ${driver.vehicle}`;
                driversList.appendChild(li);
            });
        });

    // Fetch bookings
    fetch('http://localhost:8080/admin/bookings')
        .then(response => response.json())
        .then(bookings => {
            const bookingsList = document.getElementById('bookings-list');
            bookings.forEach(booking => {
                const li = document.createElement('li');
                li.textContent = `Booking ID: ${booking.id} - Status: ${booking.status}`;
                bookingsList.appendChild(li);
            });
        });
}

