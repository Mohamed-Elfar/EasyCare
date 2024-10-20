API Documentation
Base URL

https://grackle-notable-hardly.ngrok-free.app/api/
Endpoints

1. User Registration
   Endpoint: POST /register/

Purpose: Register a new user (patient, doctor, or pharmacist) in the system.

Request Body:

For Patient Registration:

json

{
"full_name": "Emily Davis",
"email": "patient@example.com",
"national_id": "30103011607053",
"phone_number": "01060493174",
"password": "StrongPassword123",
"gender": "Female",
"birthday": "1990-01-20",
"address": "789 Wellness Ave, Healthtown",
"diabetes": true,
"heart_disease": false,
"allergies": ["Peanuts", "Penicillin"],
"other_diseases": "Seasonal flu",
"user_type": "patient"
}
Expected Response:

json

{
"status": "User created"
} 2. Login
Endpoint: POST /login/

Purpose: Authenticate a user and obtain JWT tokens.

Request Body:

json

{
"national_id": "email@example.com",
"password": "StrongPassword123"
}
Expected Response:

json

{
"access": "JWT access token",
"refresh": "JWT refresh token",
"user_type": "pharmacist|doctor|patient"
} 3. Request Password Reset
Endpoint: POST /request-password-reset/

Purpose: Initiates a password reset request by sending an OTP to the user's email.

Request Body:

json

{
"email": "user@example.com"
}
Expected Response:

json

{
"status": "OTP sent to email."
} 4. Verify OTP
Endpoint: POST /verify-otp/

Purpose: Verifies the OTP sent to the user during the password reset process.

Request Body:

json

{
"email": "user@example.com",
"otp": "123456"
}
Expected Response:

json

{
"status": "OTP verified successfully."
} 5. Set New Password
Endpoint: POST /set-new-password/

Purpose: Sets a new password for the user after OTP verification.

Request Body:

json

{
"email": "user@example.com",
"otp": "123456",
"new_password": "NewStrongPassword123"
}
Expected Response:

json

{
"status": "Password updated successfully."
} 6. User Profile
Endpoint: GET /profile/

Purpose: Retrieves the profile information of the authenticated user.

Required Headers:

{"Authorization": "Bearer <access_token>",
"ngrok-skip-browser-warning": "true"}

Expected Response:

json

{
"full_name": "Dr. John Doe",
"email": "doctor@example.com",
"national_id": "12345678901234",
"phone_number": "01012345678",
"password": "StrongPassword123",
"gender": "Male",
"birthday": "1980-05-15",
"address": "123 Doctor Street, MedCity",
"hospital": "General Hospital",
"clinic": "Doe Clinic",
"specialization": "Cardiology",
"user_type": "doctor"
} 7. Patient Search
Endpoint: GET /search-patient/{national_id}/

Purpose: Retrieves the information of a patient by their national ID.

Required Headers:

Authorization: Bearer <access_token>
Expected Response:

json

{
"full_name": "Emily Davis",
"national_id": "30103011607053",
"email": "patient@example.com"
} 8. Add Prescription
Endpoint: POST /patients/{national_id}/prescriptions/

Purpose: Allow to add prescriptions associated with a specific patient.

Required Headers:

Authorization: Bearer <access_token>
Request Body:

json

{
"medicine_name": "Paracetamol 2",
"dosage": "5000mg",
"instructions": "Take 5 tablet every 12 hours after food."
}
Expected Response:

json

{
"status": "Prescription added successfully."
}