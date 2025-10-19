# HNGi13 Backend Wizards Stage 0 Task - Dynamic Profile Endpoint

## 🧩 Description
This API exposes a `/me` endpoint that returns my profile information along with a dynamic cat fact fetched from an external API.

---

## 🚀 Features
- Returns profile info (name, email, stack)
- Fetches live cat facts from [Cat Facts API](https://catfact.ninja/fact)
- Dynamic UTC timestamp on each request
- Graceful error handling
- Returns JSON response

---

## 🧰 Tech Stack
- Node.js
- Express.js
- Axios

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Hepheoluwah/hngi13-backend-profile.git
cd hngi13-backend-profile
