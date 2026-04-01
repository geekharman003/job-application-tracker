# 💼 Job Application Tracker

A full-stack web application to **track, manage, and analyze job applications** efficiently.
Built with a modern tech stack, it helps users stay organized throughout their job search journey.

---

## 🎯 Motivation

Job hunting can quickly become overwhelming—applications spread across multiple platforms, forgotten follow-ups, and no clear way to track progress. Many candidates end up relying on spreadsheets or memory, which leads to missed opportunities and poor organization.

The **Job Application Tracker** was built to solve this problem by providing a centralized, intuitive platform where users can:

- Organize all job applications in one place
- Track progress across different stages of the hiring process
- Store resumes and related documents securely
- Gain insights through visual analytics

This project aims to simplify the job search journey, reduce stress, and help users stay focused and proactive in achieving their career goals.

---

## 🚀 Features

- 📋 **Application Management**
  - Add, edit, and delete job applications
  - Track company, role, status, and notes
  - Filter applications

- 📱 **Profile Management**
  - delete,Edit profile details
  - set profile image
  - Dark/Light mode support

- 📊 **Analytics Dashboard**
  - Visualize job application trends using charts
  - Track progress across different stages

- 🔐 **Authentication & Security**
  - Secure login/signup using JWT
  - Password hashing with bcrypt

- 📁 **File Uploads**
  - Upload resumes and documents
  - Cloud storage support (AWS S3)

- 📧 **Email Integration**
  - Notifications using Resend API

- ⏰ **Automations**
  - Scheduled tasks using cron jobs

---

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- React Router
- Zustand (state management)
- TailwindCSS (css styling)
- Recharts (data visualization)
- Axios (api requests)

### Backend

- Node.js
- Express.js
- Sequelize ORM
- MySQL

### Other Tools & Services

- AWS S3 (file storage)
- JWT (authentication)
- Multer (file uploads)
- Node-cron (scheduled jobs)
- bcryptjs (password hashing)

---

## 📂 Project Structure

```bash
Job Application Tracker/
│
├── frontend/
│   ├── src/
│   │   ├── assets/        #static assets
│   │   ├── axios/         #axios instance
│   │   ├── components/    #react components
│   │   ├── pages/         #pages components
│   │   ├── store/         #zustand store
│   │   ├── App.css        #App component css
│   │   ├── App.jsx        #App component
│   │   ├── index.css      #global css
│   │   ├── main.jsx       #react entry point
│   └── package.json       #dependencies and metadata
│
├── backend/
│   ├── src/
│   │   ├── config/         #configuration files
│   │   ├── controllers/    #route handlers
│   │   ├── middleware/     #authentication and authorization
│   │   ├── models/         #DB schemas
│   │   ├── public/         #static assets
│   │   ├── routes/         #API endpoints
│   │   ├── utils/          #helper functions
│   │   └── server.js       #backend entry point
│   └── package.json        #dependencies and metadata
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/geekharman003/job-application-tracker
cd job-application-tracker
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development


# DB CREDENTIALS
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_HOST=localhost


# JWT
JWT_SECRET=secret


# AWS
BUCKET_NAME=your_bucket_name
BUCKET_REGION=your_bucket_region
ACCESS_KEY_ID=your_access_key
SECRET_ACCESS_KEY=your_secret_key


# RESEND
RESEND_API_KEY=your_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=your_name
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

App runs on:

👉 http://localhost:5173

---

## 📊 Usage

- Sign up / Log in
- Add job applications
- Edit job applications
- Track statuses (Applied, Interview, Offer, Rejected)
- Upload resumes
- View analytics dashboard
- Export data

---

# 🔗 API Documentation

Base URL:

```id="0zsm4m"
http://localhost:3000/api
```

---

## 🔑 Authentication Routes

### 📌 Register User

**POST** `/auth/signup`

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "12345678"
}
```

#### Response

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "User created successfully"
}
```

✅ A **JWT cookie is set automatically** in the browser.

### 📌 Login User

**POST** `/auth/login`

#### Request Body

```json
{
  "email": "john@example.com",
  "password": "12345678"
}
```

#### Response

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "john@example.com"
}
```

✅ A **JWT cookie is set automatically** in the browser.

### 📌 Logout User

**POST** `/auth/logout`

#### Response

```json
{
  "message": "Logged out successfully"
}
```

✅ Clears the authentication cookie.

---

## 📋 Application Routes (Protected)

All routes below require a valid **JWT cookie**.

### 📌 Get All Applications

**GET** `/applications?limit=${limit}&offset=${offset}&title=${title}&status=${status}&company=${company}`

#### Response

```json
{
    "applications":[
        {
            {"id":1,"UserId":1,"CompanyId":1,"jobTitle":"SDE1","location":"switzerland","salaryRange":"30lpa-50lpa","jobLink":"https://www.google.com/about/careers/applications/jobs/results/136355974737732294-software-engineer-ii-calendar-android?q=%22Software%20Engineer%22&target_level=EARLY&page=2#!t=jo&jid=127025001&","status":"interview","applicationDate":"2026-03-28","resumeVersion":"resume_v1_backend","jobDescription":""
            }
        }
    ],
	"pagination": {
		"start": 1,
		"end": 5,
		"hasNextPage": true,
		"hasPrevPage": false,
		"totalRecords": 8
	}
}
```

### 📌 Create Application

**POST** `/applications`

#### Request Body

```json
{
  "company": "Google",
  "jobTitle": "SDE1",
  "location": "Noida",
  "salaryRange": "20lpa-30lpa",
  "jobLink": "https://www.google.com/careers/jobs/full-stack-engineer",
  "status": "Applied",
  "applicationDate": "2026-04-05",
  "resumeVersion": "resume_v1_backend",
  "jobDescription": "Applied via LinkedIn"
}
```

#### Response

```json
{
  "id": 11,
  "UserId": 1,
  "CompanyId": 2,
  "jobTitle": "MTS",
  "location": "hyderabad",
  "salaryRange": "30lpa-40lpa",
  "jobLink": "",
  "status": "applied",
  "applicationDate": "2026-04-01",
  "resumeVersion": "Harman_Resume_Fullstack",
  "jobDescription": "",
  "updatedAt": "2026-04-01T12:11:21.826Z",
  "createdAt": "2026-04-01T12:11:21.826Z",
  "company": "microsoft"
}
```

### 📌 Update Application

**PUT** `/applications/:id`

#### Request Body

```json
{
  "status": "Interview"
}
```

#### Response

```json
{
  "message": "Application details updated successfully"
}
```

### 📌 Delete Application

**DELETE** `/applications/:id`

#### Response

```json
{
  "message": "Application deleted successfully"
}
```

---

## 👤 User Routes (Protected)

All routes below require a valid **JWT cookie**.

**GET** `/users/profile` -> Get User Profile

**PUT** `/users/profile` -> Update User Profile

**DELETE** `/users/profile` -> Delete User Profile

**POST** `/users/profile-image` -> upload Profile Pic

**POST** `/users/profile/resumes` -> upload Resume

**GET** `/users/profile/resumes` -> get all Resumes

**DELETE** `/users/profile/resumes/:id` -> delete a resume

**GET** `/users/profile/data` -> get applications data as CSV

---

## 🌐 Dashboard Routes (Protected)

All routes below require a valid **JWT cookie**.

**GET** `/dashboard/summary` -> Get dashboard summary

---

## 🚧 Future Improvements

These features can be added to enhance the usability of the project.

- 🌐 **Browser Extension**
  - Save job postings directly from LinkedIn, Indeed, etc.

- 📅 **Interview Scheduler**
  - Calendar integration for tracking interview dates

- 📱 **Mobile App Version**
  - React Native or Flutter app for on-the-go tracking

- 🔐 **OAuth Login**
  - Sign in with Google, LinkedIn, etc.

---

## 📜 License

This project is licensed under the **ISC License**.

---
