const express = require('express');
const logger = require('./logger');  // Import the logger

const app = express();
const PORT = process.env.PORT || 3000;

// Example log messages
logger.info('Server is starting...');
logger.warn('This is a warning log');
logger.error('This is an error log');

// Example route
app.get('/', (req, res) => {
  logger.info('Root route was accessed');
  res.send('Hello, World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
