# MovieDB API

A robust and secure RESTful API for managing a movie database, built with Node.js, Express, and Knex. This backend-focused project features complete user authentication, full CRUD (Create, Read, Update, Delete) functionality for movies, and dynamic data fetching from the OMDb API.

The API is professionally documented using Swagger UI, providing an interactive way to explore and test the endpoints.

**Live Demo / API Docs:** [http://54.79.30.138:3001/](http://54.79.30.138:3001/)

![MovieDB API Swagger UI](https://i.imgur.com/your-screenshot.png)
_This screenshot should be of your Swagger UI, which is available at the link above when the application is running._

---

## Tech Stack

-   **Backend:** Node.js, Express.js
-   **Database:** PostgreSQL with Knex.js for query building
-   **Authentication:** JSON Web Tokens (JWT) with bcrypt for password hashing
-   **API Documentation:** OpenAPI 3.0 (Swagger UI)
-   **Security:** Helmet for securing HTTP headers
-   **Environment:** Docker & Docker Compose for containerization

---

## Features

-   **User Authentication:** Secure user registration and login system.
-   **JWT-Protected Routes:** Endpoints for creating, updating, and deleting movies are restricted to authenticated users.
-   **Full Movie CRUD:** Complete create, read, update, and delete operations for movie records.
-   **OMDb Integration:** Dynamically fetches movie posters and additional details from a third-party API.
-   **Advanced Search:** Search for movies in the local database by title or genre.
-   **Interactive API Documentation:** A complete Swagger UI setup allows for easy exploration and testing of all endpoints.

---

## API Documentation

The API is fully documented using the OpenAPI 3.0 specification. You can view the interactive documentation (powered by Swagger UI) by running the application and navigating to `/api-docs` in your browser.

This provides a clear overview of all available endpoints, their parameters, and expected responses. It also allows you to test the API directly from the browser.

---

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm
-   A running PostgreSQL instance

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/moviedb-api.git
    cd moviedb-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables. Replace the placeholder values with your database credentials and a secure secret for JWT.

    ```env
    DB_CLIENT=pg
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_DATABASE=moviedb
    DB_CHARSET=utf8

    JWT_SECRET=your_super_secret_key
    OMDB_API_KEY=your_omdb_api_key
    ```

4.  **Run database migrations:**
    This will create the necessary `users` and `movies` tables in your database.
    ```bash
    npm run migrate
    ```

5.  **Run the application:**
    ```bash
    npm start
    ```

The server will start on `http://localhost:3000`.

---
