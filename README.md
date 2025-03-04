# User Authentication System

## ✨ Features
- User Registration with hashed passwords
- JWT-based Authentication for secure API access
- Login System returning authentication token
- Forgot Password & Reset Password via email
- Protected Routes using JWT authentication middleware
- Input Validation & Error Handling
- Security Measures (bcrypt, JWT expiration, etc.)

## Screenshots
![Screenshot (370)](https://github.com/user-attachments/assets/d90d3183-f882-47d5-b6c4-a348be7a073a)
![Screenshot (371)](https://github.com/user-attachments/assets/5349173b-1b2c-4fb0-84b7-98d50517c305)
![Screenshot (368)](https://github.com/user-attachments/assets/4573db48-2dda-4bff-ba48-32d60b55e001)
![Screenshot (369)](https://github.com/user-attachments/assets/f228a5f2-13e5-40d3-8195-97350093af42)


## 🛠️ Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB & Mongoose**: Database & ORM
- **JWT (JSON Web Token)**: Authentication system
- **Bcrypt.js**: Secure password hashing
- **Nodemailer**: Sending emails for password reset
- **dotenv**: Managing environment variables
- **Express Validator**: Validating user inputs

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB**
- **npm** (Node Package Manager)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/user-auth-system.git
   cd user-auth-system
   ```
   
2 Install Dependencies
```
npm install express mongoose bcryptjs jsonwebtoken nodemailer dotenv express-validator
npm install --save-dev nodemon
```

3 Create Configuration Files
Create a .env file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
PORT=5000
```

4 Add Scripts to package.json
```
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

5 Run the Application
```
npm run dev
```

# 🔒 Security Best Practices
## Use environment variables for sensitive information

# 📝 Contribution Guidelines
## Fork the repository
## Create a new branch
## Make your changes
## Run tests
## Submit a pull request
