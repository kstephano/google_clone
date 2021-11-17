const server = require('./app');
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => console.log(`\nServer departing now from http://localhost:${PORT}!\n`));