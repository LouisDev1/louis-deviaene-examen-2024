# 📦 ExamenOpdracht OPO DevOps 2024

## 📖 Project Overview
This project demonstrates the implementation of DevOps practices for a full-stack web application. The stack includes a **Vue.js frontend** and an **Express.js backend**, containerized with Docker and automated through CI/CD pipelines using GitHub Actions.

---

## 🛠️ Setup Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/louisdev1/louis-deviaene-examen-2024.git
cd louis-deviaene-examen-2024
```

### 2. **Run the Application (Development)**
```bash
docker-compose up --build
```

### 3. **Run the Application (Production)**
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### 4. **Access the Application**
- **Backend:** `http://localhost:3000`  
- **Frontend:** `http://localhost:8080`

---

## 🔄 Development Workflow

1. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes and Commit:**
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

3. **Push Changes:**
   ```bash
   git push --set-upstream origin feature/your-feature
   ```

4. **Open a Pull Request:**
   - Navigate to the repository on GitHub.
   - Open a pull request targeting the `main` branch.

---

## 🚀 Implemented DevOps Practices

1. **Docker**
   - Separate Docker configurations for **development** and **production**.
   - Single-command deployment with `docker-compose`.

2. **CI/CD Pipelines (GitHub Actions)**
   - **Linting Workflow:** Checks code quality with ESLint.
   - **Automated Testing:** Runs unit tests using Jest.
   - **Docker Image Build & Push:** Builds and pushes Docker images to **GitHub Container Registry (GHCR)**.

3. **Branch Protection Rules**
   - Pull Requests require passing all checks before merging.
   - Reviews are required before merging into `main`.

4. **Monitoring & Logging**
   - Structured logging implemented with **Winston**.
   - Logs are saved in `backend/logs/app.log` and `backend/logs/exceptions.log`.

---

## ⚙️ Configuration Instructions

### **Environment Variables**
Create a `.env` file in the `backend/` directory:
```bash
PORT=3000
DB_URI=mongodb://localhost:27017/app
```

### **GitHub Secrets**
- **CR_PAT:** Personal Access Token for publishing Docker images to **GitHub Container Registry (GHCR)**.

---

## 📊 CI/CD Pipeline Overview

1. **Linting Workflow:**  
   - Uses ESLint to check the code for potential issues.

2. **Automated Testing Workflow:**  
   - Executes Jest unit tests for backend code.

3. **CI/CD Pipeline:**  
   - Builds Docker images and pushes them to **GitHub Container Registry (GHCR)**.

---

## 🛡️ Branch Protection Rules

- **Status Checks:** All workflows (Lint, Test, Build) must pass before merging.  
- **Pull Request Reviews:** Merging into `main` requires at least one approval.  
- **No Force Pushes:** Force pushes are disabled to protect the main branch.

---

**End of README**

