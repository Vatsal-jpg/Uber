# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their email, full name, and password. On successful registration, a JWT token and the user object are returned.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `fullname.firstname` (string, required): At least 3 characters.
- `fullname.lastname` (string, optional): At least 3 characters if provided.
- `password` (string, required): At least 6 characters.

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Missing Fields

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

## Example Request

```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "password": "yourpassword"