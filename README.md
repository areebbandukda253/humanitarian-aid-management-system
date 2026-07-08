# Humanitarian Aid Management System

A full-stack MERN web application built to streamline coordination 
and distribution of humanitarian aid. Developed in response to the 
2022 Pakistan floods that affected 33 million citizens.

## Problem Statement
Pakistan faces significant challenges in disaster response due to 
unstructured aid management. This system provides a centralized, 
efficient tool for tracking donor data, managing donations, and 
ensuring equitable aid distribution.

## Features
- Donor Management — register, update, and track donor profiles
- Donation Management — log donations by type, quantity, and location
- Beneficiary Management — manage beneficiary records and aid received
- RESTful API backend connecting React frontend to MongoDB
- Full CRUD operations across all three modules

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB (NoSQL) |
| ODM | Mongoose |
| API | RESTful APIs |

## Database Design
Three MongoDB collections:
- **donors** — donor profiles with embedded donation history
- **donations** — individual records linked to donors via ObjectId
- **beneficiaries** — profiles with aid received tracking

Relationships:
- One donor to many donations (One-to-Many)
- Donations to multiple beneficiaries (Many-to-Many)

## Project Structure
├── backend/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
├── donors.json
├── donations.json
└── beneficiaries.json


## Setup

### Run Backend
```bash
cd backend
npm install
node server.js
```

### Run Frontend
```bash
cd frontend
npm install
npm start
```

## Sample Data
- `donors.json` — sample donor records
- `donations.json` — sample donation records
- `beneficiaries.json` — sample beneficiary records

## Course
Introduction to Database Systems — FAST NUCES
