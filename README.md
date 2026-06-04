# 🚗 Driving School Management System

A full-stack Driving School Management System built with React, Flask, and SQLite.

## Features

- Student Registration
- Student Management
- Fee Tracking
- Driving Class Scheduling
- Dashboard
- Responsive Interface
- SQLite Database Storage

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios

### Backend
- Flask
- Flask-CORS
- Flask-SQLAlchemy

### Database
- SQLite

---

## Project Structure

```text
driving-school-app/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── database.db
│   └── requirements.txt
│
├── README.md
└── .gitignore
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run server:

```bash
python app.py
```

Backend URL:

```text
http://127.0.0.1:5000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run project:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## API Endpoints

### Get Students

```http
GET /api/students
```

### Add Student

```http
POST /api/students
```

### Delete Student

```http
DELETE /api/students/:id
```

---

## Color Palette

| Color | Hex |
|---------|---------|
| Yellow | #E8F957 |
| Green | #BBE11A |
| Light Blue | #C1E5FB |
| Sky Blue | #86D0FD |
| Blue | #4891E7 |
| Dark Blue | #042C8F |

---

## Future Enhancements

- Student Login
- Admin Authentication
- Vehicle Management
- Instructor Management
- Attendance Tracking
- WhatsApp Notifications
- PDF Reports
- Excel Export
- Online Payments

---

## Author

Driving School Management System Project
Built using React + Flask + SQLite.
