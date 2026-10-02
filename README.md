# Job Application Management System

A full-stack web application for managing users and tracking job applications. The system provides RESTful APIs using Spring Boot and a responsive Angular admin dashboard for managing users and applications.

## 🚀 Features

### Backend
- User CRUD operations
- Job application CRUD operations
- User–Job Application relationship
- RESTful APIs
- Spring Data JPA and Hibernate
- MySQL database integration
- Input validation
- Global exception handling
- CORS configuration
- Swagger/OpenAPI documentation

### Frontend
- Angular admin dashboard
- Admin login UI
- Dashboard statistics
- User management
- Job application management
- Application status tracking
- Add, update and delete users
- Add, update and delete applications
- Dark mode
- Responsive UI

## 🛠️ Technologies Used

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API
- Maven

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Database
- MySQL

### Tools
- Eclipse
- MySQL Workbench
- Postman
- Swagger/OpenAPI
- Git
- GitHub

## 🏗️ Project Architecture

```text
User
  ↓
Angular UI
  ↓
Angular Service
  ↓
HTTP REST API
  ↓
Spring Boot Controller
  ↓
Service Layer
  ↓
Repository Layer
  ↓
Hibernate / JPA
  ↓
MySQL
```

## 📁 Project Structure

```text
job-application-management-system
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── admin/
│   │       ├── login/
│   │       └── services/
│   ├── angular.json
│   ├── package.json
│   └── package-lock.json
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/jobapplication/
│       │       ├── controller/
│       │       ├── entity/
│       │       ├── exception/
│       │       ├── repository/
│       │       └── service/
│       │
│       └── resources/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── .gitignore
```

## 🔗 REST API Endpoints

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Get all users |
| GET | `/users/{id}` | Get user by ID |
| POST | `/users` | Create a user |
| PUT | `/users/{id}` | Update a user |
| DELETE | `/users/{id}` | Delete a user |

### Job Application APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/applications` | Get all applications |
| GET | `/applications/{id}` | Get application by ID |
| POST | `/applications` | Create an application |
| PUT | `/applications/{id}` | Update an application |
| DELETE | `/applications/{id}` | Delete an application |

## 🗄️ Database

The application uses MySQL with two main tables:

```text
users
│
├── user_id
├── name
├── email
└── phone

        1
        │
        │
        │
        N

job_applications
├── application_id
├── company_name
├── job_role
├── location
├── status
├── applied_date
└── user_id
```

Relationship:

```text
One User
   │
   └─── Many Job Applications
```

## ▶️ How to Run the Backend

### 1. Clone the repository

```bash
git clone https://github.com/SuryaGanesh-60/job-application-management-system.git
```

### 2. Open the project

Open the project in Eclipse or another Java IDE.

### 3. Configure MySQL

Create the database:

```sql
CREATE DATABASE jobmanagement;
```

Configure your local MySQL username and password in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/jobmanagement
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

> Do not commit your real database password to GitHub.

### 4. Start Spring Boot

Run:

```text
JobapplicationApplication.java
```

Backend:

```text
http://localhost:8080
```

## ▶️ How to Run the Frontend

Open a terminal inside:

```text
frontend
```

Install dependencies:

```bash
npm install
```

Start Angular:

```bash
ng serve
```

If PowerShell blocks `ng.ps1`, use:

```bash
ng.cmd serve
```

Frontend:

```text
http://localhost:4200
```

## 📖 Swagger API Documentation

After starting the backend, Swagger UI is available at:

```text
http://localhost:8080/swagger-ui.html
```

OpenAPI specification:

```text
http://localhost:8080/v3/api-docs
```

## 🔐 Demo Admin Login

The current frontend contains a UI-only demo admin login:

```text
Email: admin@gmail.com
Password: admin123
```

> This is a frontend demonstration login and is not intended to represent production authentication or authorization.

## 🔄 Application Flow

### Creating a User

```text
Angular Form
     ↓
UserService
     ↓
POST /users
     ↓
Spring Boot Controller
     ↓
UserService
     ↓
UserRepository
     ↓
MySQL
     ↓
Response
     ↓
Angular Dashboard
```

### Creating a Job Application

```text
Angular Form
     ↓
JobApplicationService
     ↓
POST /applications
     ↓
Spring Boot Controller
     ↓
JobApplicationService
     ↓
JobApplicationRepository
     ↓
MySQL
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Java backend development
- Spring Boot application development
- REST API development
- Spring Data JPA
- Hibernate
- MySQL database integration
- Entity relationships
- CRUD operations
- Input validation
- Exception handling
- Angular development
- TypeScript
- API integration
- Git and GitHub
- Full-stack application architecture

## 🔮 Future Enhancements

- JWT-based authentication
- Role-based authorization
- Advanced application search and filtering
- Pagination
- Email notifications
- Resume upload
- Application analytics
- Deployment using cloud platforms

## 👨‍💻 Author

**Kasani Chandu**

B.Tech – Information Technology

Interested in Java Full Stack Development, Software Development.

## 📌 Project Status

**Completed**

This project was developed as a full-stack learning and portfolio project using Java, Spring Boot, Angular and MySQL.
