hello >_<

# API Endpoints Documentation

This document outlines the endpoints available in our API along with instructions on how to use them.

## Authentication

All endpoints require authentication via an API key. The API key should be included in the headers of each request under the `Authorization` field.

Example:
![image](https://github.com/vsteschenko/TheNote/assets/136891597/87112b3c-9984-4d85-b7a6-3591067f7d73)


## Endpoints

### 1. `/users`

#### GET `/users`
- **Description**: Retrieve a list of all users.
- **Parameters**: None
- **Authorization**: Required
- **Response**: JSON object containing an array of user objects.

#### GET `/users/{id}`
- **Description**: Retrieve information about a specific user.
- **Parameters**: `id` (integer) - ID of the user.
- **Authorization**: Required
- **Response**: JSON object containing user details.

#### POST `/users`
- **Description**: Create a new user.
- **Parameters**: JSON object with user details (e.g., name, email).
- **Authorization**: Required
- **Response**: JSON object containing details of the newly created user.

#### PUT `/users/{id}`
- **Description**: Update an existing user.
- **Parameters**: `id` (integer) - ID of the user, JSON object with updated user details.
- **Authorization**: Required
- **Response**: JSON object containing updated user details.

#### DELETE `/users/{id}`
- **Description**: Delete a user.
- **Parameters**: `id` (integer) - ID of the user to be deleted.
- **Authorization**: Required
- **Response**: Status code indicating success or failure.

### 2. `/posts`

#### GET `/posts`
- **Description**: Retrieve a list of all posts.
- **Parameters**: None
- **Authorization**: Required
- **Response**: JSON object containing an array of post objects.

#### GET `/posts/{id}`
- **Description**: Retrieve information about a specific post.
- **Parameters**: `id` (integer) - ID of the post.
- **Authorization**: Required
- **Response**: JSON object containing post details.

#### POST `/posts`
- **Description**: Create a new post.
- **Parameters**: JSON object with post details (e.g., title, content).
- **Authorization**: Required
- **Response**: JSON object containing details of the newly created post.

#### PUT `/posts/{id}`
- **Description**: Update an existing post.
- **Parameters**: `id` (integer) - ID of the post, JSON object with updated post details.
- **Authorization**: Required
- **Response**: JSON object containing updated post details.

#### DELETE `/posts/{id}`
- **Description**: Delete a post.
- **Parameters**: `id` (integer) - ID of the post to be deleted.
- **Authorization**: Required
- **Response**: Status code indicating success or failure.
