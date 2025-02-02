# User Management System

This is a basic CRUD (Create, Read, Update, Delete) User Management System built with **Spring Boot** (backend), **React** (frontend), and **PostgreSQL** (database). The system allows you to manage users by performing basic operations such as adding, viewing, updating, and deleting user records.

---

## Features

- **Create User**: Add a new user with details like name, email, and other relevant information.
- **Read User**: View a list of all users or fetch details of a specific user.
- **Update User**: Modify the details of an existing user.
- **Delete User**: Remove a user from the system.
- **Responsive UI**: A clean and responsive user interface built with React.
- **RESTful API**: Backend powered by Spring Boot, providing RESTful endpoints for CRUD operations.
- **Database**: PostgreSQL is used to store user data persistently.

---

## Technologies Used

### Backend
- **Spring Boot**: A Java-based framework for building RESTful APIs.
- **Spring Data JPA**: For database operations and ORM (Object-Relational Mapping).
- **PostgreSQL**: A powerful, open-source relational database system.
- **Maven**: For dependency management and building the project.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For handling navigation within the React app.
- **Bootstrap**: For styling and responsive design.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Java Development Kit (JDK) 17 or higher**
2. **Node.js** (for running the React frontend)
3. **PostgreSQL** (for the database)
4. **Maven** (for building the Spring Boot project)
5. **Git** (for cloning the repository)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Kojonhyiraa/User-Management-System.git
cd User-Management-System
```

### 2. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd /User-Management-Backend
   ```
2. Update the `application.properties` file with your PostgreSQL database credentials:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/user_management
   spring.datasource.username=your-db-username
   spring.datasource.password=your-db-password
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend will start at `http://localhost:8080`.

### 3. Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../User-Management-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will start at `http://localhost:3000`.

### 4. Database Setup

1. Create a PostgreSQL database named `db_user_management`.
2. The Spring Boot application will automatically create the necessary tables on startup.

---

## API Endpoints
Endpoints were tested in Postman


---

## Screenshots

![View All Users](https://github.com/user-attachments/assets/44bfa68d-785f-4899-9299-6bc966f669c8)

![View User Details Page](https://github.com/user-attachments/assets/bc6889dc-c632-4873-883b-b171e9db4da8)

![Add User Page](https://github.com/user-attachments/assets/9f78619c-61e3-4b8c-bae2-177a1e6cf488)

![Edit Users](https://github.com/user-attachments/assets/abfd65aa-3662-486d-a3bc-fd1a09d781c6)




---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: kojonhyira17@gmail.com
- **GitHub**: [Kojo Nhyira](https://github.com/kojonhyiraa)

---

Enjoy using the User Management System! 🚀
