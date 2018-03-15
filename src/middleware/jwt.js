
const jwt = require('jsonwebtoken');

module.exports = jwt({
    secret: 'A very secret key', // Should not be hardcoded
});
