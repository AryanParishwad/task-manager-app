# 📝 Task Management App

A sleek and professional web-based task management application that allows users to create, edit, and manage tasks efficiently. Built with modern web technologies, this app serves as an excellent starting point for developers interested in full-stack development.

## 🚀 Features

- **Add New Tasks:** Quickly add tasks with relevant details.
- **Edit Existing Tasks:** Modify task information as needed.
- **Delete Tasks:** Remove tasks that are no longer required.
- **Responsive Design:** Optimized for various screen sizes, including desktops, tablets, and mobile devices.
- **User-Friendly Interface:** Clean and intuitive UI for seamless user experience.

## 🛠️ Technologies Used

- **Frontend:**
  - React.js: JavaScript library for building user interfaces.
  - CSS3: Styling the application with a focus on responsiveness and aesthetics.
- **Backend:**
  - Spring Boot: Framework for building Java-based backend applications.
  - Java 21: Programming language used for backend development.
- **Database:**
  - PostgreSQL: Relational database for storing task data.
- **Build Tools:**
  - Maven: Build automation tool for managing project dependencies.
- **Version Control:**
  - Git: Version control system.
  - GitHub: Hosting the repository and facilitating collaboration.

## 📁 Project Structure

```plaintext
task-manager-app/
├── taskmanagement/          # Backend - Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── ...
├── taskmanagerfrontend/     # Frontend - React application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🧰 Prerequisites

Before you begin, ensure you have the following software installed:

- **Java Development Kit (JDK) 21:** Required for running the Spring Boot backend.
- **Node.js and npm:** Required for running the React frontend.
- **Maven:** Build tool for managing backend dependencies.
- **PostgreSQL:** Relational database for storing task data.
- **Git:** Version control system for cloning the repository.

## 🛠️ Installation and Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/AryanParishwad/task-manager-app.git
```

### 2. Navigate to the Project Directory

```bash
cd task-manager-app
```

### 3. Set Up the Backend

#### a. Navigate to the Backend Directory

```bash
cd taskmanagement
```

#### b. Build the Backend Project

```bash
mvn clean install
```

#### c. Run the Backend Application

```bash
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`.

### 4. Set Up the Frontend

#### a. Open a New Terminal and Navigate to the Frontend Directory

```bash
cd ../taskmanagerfrontend
```

#### b. Install Frontend Dependencies

```bash
npm install
```

#### c. Start the Frontend Development Server

```bash
npm start
```

The frontend application will open in your default browser at `http://localhost:3000`.

## 🌐 Accessing the Application

Once both the backend and frontend servers are running:

- Open your browser and navigate to `http://localhost:3000` to access the Task Management App.
- Ensure that the backend server (`http://localhost:8080`) is running to handle API requests from the frontend.

## 📥 Software Installation Guides

### Java Development Kit (JDK) 21

- **Download:** [Oracle JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- **Installation Guide:** Follow the instructions provided on the download page to install JDK 21 on your system.

### Maven

- **Download:** [Apache Maven](https://maven.apache.org/download.cgi)
- **Installation Guide:** [Installing Apache Maven](https://maven.apache.org/install.html)

### PostgreSQL

- **Download:** [PostgreSQL for Windows](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- **Installation Guide:** [Installing PostgreSQL on Windows](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/windows/)

### Node.js and npm

- **Download:** [Node.js](https://nodejs.org/en/download/)
- **Installation Guide:** The installer includes npm. Follow the instructions provided on the download page to install Node.js and npm.

### Git

- **Download:** [Git for Windows](https://git-scm.com/download/win)
- **Installation Guide:** The installer provides step-by-step instructions. Follow the prompts to install Git on your system.

## 🖥️ Live Demo

A live version of the application is deployed and can be accessed here: [Live Demo Link](https://fastidious-chaja-72d16b.netlify.app/)

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
