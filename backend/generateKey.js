const crypto = require('crypto');

// Random secret key generate karna
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);
