
Resume Editor

A web-based Resume Editor built with React for the frontend and FastAPI for the backend.

This application allows users to:

Upload resumes
Edit resume sections
Enhance content using a mock AI backend
Save and retrieve resume data
Download the final resume as JSON

---

Features

Upload Resume
Accepts .pdf or .docx files (mock parsing)

Edit Resume
Update fields like name, summary, experience, education, and skills

Enhance with AI
Send section text to the backend endpoint /ai-enhance
Display the improved content returned by FastAPI

Save Resume
Save the entire resume JSON to the backend at /save-resume

Download Resume
Download the final resume as a .json file

---

Project Structure

resume-editor
  frontend   React app
  backend    FastAPI app

---

Setup Instructions

Backend (FastAPI)

Requirements:
Python 3.9 or higher
pip

Steps:

1. Navigate to the backend folder:

   cd backend

2. Create and activate a virtual environment:

   Windows:
   python -m venv venv
   venv\Scripts\activate

   macOS/Linux:
   python3 -m venv venv
   source venv/bin/activate

3. Install dependencies:

   pip install fastapi uvicorn

4. Start the backend server:

   uvicorn main:app --reload

   The backend will be running at:
   http://127.0.0.1:8000

---

Frontend (React)

Requirements:
Node.js version 14 or higher
npm

Steps:

1. Navigate to the frontend folder:

   cd frontend

2. Install dependencies:

   npm install

3. Start the frontend development server:

   npm start

   The frontend will be running at:
   http://localhost:3000

---

API Endpoints

POST /ai-enhance

Description:
Mock AI enhancement of section text.

Request Body Example:
{
  "section": "summary",
  "content": "Experienced developer..."
}

Response Example:
{
  "improved_content": "Enhanced version of 'summary': EXPERIENCED DEVELOPER..."
}

POST /save-resume

Description:
Save the resume JSON to disk.

Request Body Example:
{
  "name": "John Doe",
  "summary": "...",
  "experience": "...",
  "education": "...",
  "skills": "..."
}

Response Example:
{
  "status": "Resume saved successfully"
}

---

Technologies Used

Frontend: React and JavaScript
Backend: FastAPI and Python
Styling: CSS

---

How to Run the Complete App

1. Start the backend first:

   cd backend
   venv\Scripts\activate   or   source venv/bin/activate on macOS/Linux
   uvicorn main:app --reload

2. In a separate terminal, start the frontend:

   cd frontend
   npm start

---

Downloading the Final Resume

In the frontend, click Download Resume JSON to save the edited resume to your computer.

---

Submission Notes

This repository includes:

frontend folder - React app
backend folder - FastAPI app
Complete setup instructions in this README

---

License

This project was created for internship assignment purposes.
>>>>>>> 0f89f017a7128b73755d52feec315dcd865338ee
