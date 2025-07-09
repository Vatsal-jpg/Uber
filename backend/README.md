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

```
 User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in using their email and password. On successful authentication, a JWT token and the user object are returned.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

## Responses

### Success

- **Status:** `200 OK`
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

### Invalid Credentials

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example Request

```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "yourpassword"
  }'
```
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
  }'
```

---

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in using their email and password. On successful authentication, a JWT token and the user object are returned.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): At least 6 characters.

## Responses

### Success

- **Status:** `200 OK`
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

### Invalid Credentials

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Example Request

```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "yourpassword"
  }'
```

---

# Get User Profile Endpoint

## Endpoint

`GET /users/profile`

## Description

This endpoint returns the profile information of the currently authenticated user. The request must include a valid JWT token (as a cookie or in the `Authorization` header).

## Authentication

- Requires authentication via JWT token.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
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

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "You are not logged in"
  }
  ```

## Example Request

```bash
curl -X GET http://localhost:4000/users/profile \
  -H "Authorization: Bearer jwt_token_here"
```

---

# User Logout Endpoint

## Endpoint

`GET /users/logout`

## Description

This endpoint logs out the currently authenticated user by clearing the authentication cookie. The request must include a valid JWT token (as a cookie or in the `Authorization` header). It automatically blacklists it after 24hrs.

## Authentication

- Requires authentication via JWT token.

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "You have been logged out successfully"
  }
  ```

### Unauthorized

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "You are not logged in"
  }
  ```

## Example Request

```bash
curl -X GET http://localhost:4000/users/logout \
  -H "Authorization: Bearer
```
# Captain Registration Endpoint

## Endpoint

`POST /captains/register`

## Description

This endpoint allows a new captain to register by providing their email, full name, password, and vehicle details. On successful registration, a captain object is returned.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "yourpassword",
  "vehicle": {
    "color": "blue",
    "plate": "MH 47 K 3403",
    "capacity": 5,
    "vehicleType": "car"
  }
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `fullname.firstname` (string, required): At least 3 characters.
- `fullname.lastname` (string, optional): At least 3 characters if provided.
- `password` (string, required): At least 6 characters.
- `vehicle.color` (string, required): Vehicle color.
- `vehicle.plate` (string, required): Vehicle plate number.
- `vehicle.capacity` (integer, required): At least 1.
- `vehicle.vehicleType` (string, required): Must be one of `car`, `bike`, or `auto`.

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      "vehicle": {
        "color": "blue",
        "plate": "MH 47 K 3403",
        "capacity": 5,
        "vehicleType": "car"
      },
      "status": "inactive"
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
curl -X POST http://localhost:4000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "captain@example.com",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "password": "yourpassword",
    "vehicle": {
      "color": "blue",
      "plate": "MH 48 V 7777",
      "capacity": 5,
      "vehicleType":
```