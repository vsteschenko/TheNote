hello >_<

# API Endpoints Documentation

This document outlines the endpoints available in our API along with instructions on how to use them.

## Authentication

All endpoints require authentication via an API key. The API key should be included in the headers of each request under the `Authorization` field.

Example:
![image](https://github.com/vsteschenko/TheNote/assets/136891597/87112b3c-9984-4d85-b7a6-3591067f7d73)


## Endpoints

### Admin Site
- `GET /admin/`

### Authentication
- `POST /login/` - Login endpoint {"username": "", "password": ""}
- `POST /signup/` - Signup endpoint {"email": "", "password": "", "username": ""}

### Note Operations
- `GET /note/` - List all notes (for staff) or user's own notes
- `POST /note/` - Create a new note
- `GET /note/{id}/` - Retrieve a specific note by its ID
- `PUT /note/{id}/` - Update a specific note by its ID
- `PATCH /note/{id}/` - Partially update a specific note by its ID
- `DELETE /note/{id}/` - Delete a specific note by its ID

### Upload Image
- `POST /note/upload_image/` - Upload an image and create a note with the image URL

### Test Token
- `GET /test_token/` - Test if the provided token is valid


