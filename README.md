# Taxi Management System

A secure, role-based Spring Boot application for managing taxi bookings, drivers, and users. Built with JWT authentication, RESTful APIs, and MySQL, this system allows seamless ride booking, driver assignment, and admin control.

---

## 📌 Features

- 🧑‍💼 Admin Dashboard
  - Add/Edit/Delete Drivers
  - View All Bookings
- 👤 User Module
  - User Registration/Login (JWT Auth)
  - Book Rides (Pickup & Drop)
  - View Booking History
- 🔐 Secure Role-based Access using Spring Security + JWT
- 📍 Live Map (Map.js integrated)
- 📊 Dashboard UI using Bootstrap + Thymeleaf

---

## 🧰 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Backend     | Java, Spring Boot      |
| Security    | Spring Security + JWT |
| Frontend    | HTML, CSS, JS, Bootstrap |
| Database    | MySQL                  |
| Build Tool  | Maven                  |
| REST Client | Postman                |

---

## 📂 Project Structure

TaxiManagementSystem/
├── controller/
│ ├── AdminController.java
│ ├── AuthController.java
│ ├── BookingController.java
│ └── DriverController.java
├── model/
│ ├── Booking.java
│ ├── Driver.java
│ └── User.java
├── repository/
│ ├── BookingRepository.java
│ ├── DriverRepository.java
│ └── UserRepository.java
├── securityconfig/
│ ├── JwtAuthenticationFilter.java
│ ├── JwtUtil.java
│ ├── SecurityConfig.java
│ └── WebSecurityConfigurerAdapter.java
├── resources/
│ ├── static/
│ │ ├── admin-dashboard.html
│ │ ├── index.html
│ │ ├── app.js, map.js, styles.css
│ └── application.properties
├── TaxiManagementSystemApplication.java

yaml
Copy
Edit

---

## 🗃️ Database Design (Entities)

### `User`
- id
- name
- email
- password
- role (ADMIN, USER)

### `Driver`
- id
- name
- licenseNumber
- phoneNumber
- availability

### `Booking`
- id
- userId (FK)
- driverId (FK)
- pickupLocation
- dropLocation
- distance
- fare
- date

---

## 🔐 Security Features

- Spring Security + JWT-based token validation
- Secure login endpoint returns JWT
- Protected endpoints for `ADMIN` and `USER`
- Stateless session with `OncePerRequestFilter`

