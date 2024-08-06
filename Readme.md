

# Book Management API

This project is a Book Management API developed using Node.js, Express, MongoDB, and Mongoose. The API allows users to manage a collection of books with functionalities such as creating, retrieving, updating, and deleting books.

## Objectives

### Objective 1: Server Setup and Testing
1. **Create a server**
2. **Test the Server**
3. **Get responses**
4. **Check if the server is okay and working**

### Objective 2: MongoDB Integration
1. **Signed up on MongoDB**
2. **Connected to the database**
3. **Created a `.env` file and set the `MONGO_URI` with the MongoDB URL**
    - Entered the project password, project name, and `/booksdb` (database name) in the URL.
4. **Server running fine and connected to MongoDB**
5. **Created an error catch message**

### Objective 3: GitHub Setup
1. **Setting up your GitHub account**
    - Added `node_modules` and `.env` to `.gitignore` to prevent them from being published.
2. **Initialized a git repository** (`git init` - must have git installed)
3. **Added remote origin** (`git remote add origin <repository-url>`)
4. **Added all files** (`git add *`)
5. **Committed changes** (`git commit -m "setup"`)
6. **Pushed to the repository** (`git push origin master`)

### Objective 4: API Development
1. **Created a `model` folder**
    - Inside the `model`, created `book.js`
    - Created the book schema and installed `mongoose` (contains all necessary information about the book)
2. **Created a `routes` folder**
    - Inside `routes`, created `book.js`
    - Imported Express and created a `POST` method to allow users to post their book (following the Mongoose convention)
3. **Installed Postman**
    - Tested the API endpoints using Postman

## Project Structure
```
├── model
│   └── book.js
├── routes
│   └── book.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2. **Install dependencies:**
    ```sh
    cd <project-directory>
    npm install
    ```
3. **Create a `.env` file in the root directory and add your MongoDB URI:**
    ```env
    MONGO_URI=your_mongodb_uri
    ```
4. **Run the server:**
    ```sh
    node server
    ```

## API Endpoints

### Create a New Book
- **URL:** `/api/books`
- **Method:** `POST`
- **Description:** Create a new book entry.
- **Body Parameters:**
    - `bookName`: `string` (required, min: 3, max: 50)
    - `authorName`: `string` (required, min: 3, max: 100)
    - `authorAge`: `number` (required, min: 10, max: 100)
    - `genre`: `string` (required, min: 3, max: 50)
- **Response:**
    - `201 Created` if successful.
    - `400 Bad Request` if validation fails.
    - `500 Internal Server Error` if there's an issue saving to the database.

### Get All Books
- **URL:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieve all books.
- **Response:**
    - `200 OK` with the list of books.
    - `500 Internal Server Error` if there's an issue retrieving from the database.

### Get Book by ID
- **URL:** `/api/books/:bookId`
- **Method:** `GET`
- **Description:** Retrieve a book by its ID.
- **Response:**
    - `200 OK` if successful.
    - `404 Not Found` if the book does not exist.
    - `500 Internal Server Error` if there's an issue retrieving from the database.

### Update Book by ID
- **URL:** `/api/books/:bookId`
- **Method:** `PUT`
- **Description:** Update a book's information by its ID.
- **Body Parameters:**
    - `bookName`: `string` (required, min: 3, max: 50)
    - `authorName`: `string` (required, min: 3, max: 100)
    - `authorAge`: `number` (required, min: 10, max: 100)
    - `genre`: `string` (required, min: 3, max: 50)
- **Response:**
    - `200 OK` if successful.
    - `404 Not Found` if the book does not exist.
    - `500 Internal Server Error` if there's an issue updating the database.

### Delete Book by ID
- **URL:** `/api/books/:bookId`
- **Method:** `DELETE`
- **Description:** Delete a book by its ID.
- **Response:**
    - `200 OK` if successful.
    - `404 Not Found` if the book does not exist.
    - `500 Internal Server Error` if there's an issue deleting from the database.

## Testing

Use Postman to test the API endpoints. Ensure that the server is running and connected to MongoDB before sending requests.

## Conclusion

This project provided a comprehensive learning experience in building a RESTful API with Node.js, Express, MongoDB, and Mongoose. By completing this project, I gained valuable skills in server setup, database integration, API development, and testing.

---
