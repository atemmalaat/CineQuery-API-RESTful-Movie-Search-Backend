module.exports =
{
    client: 'mysql2', // Specifies the database client
    connection: {
        host: '127.0.0.1', // Your MySQL host (usually localhost or 127.0.0.1)
        port: 3306, // Default MySQL port
        user: 'root', // Your MySQL username (e.g., 'root')
        password: process.env.DB_PASSWORD, // Your MySQL password - HBO23p0
        database: 'movies' // The database name you created
    }

};