const crypto = require('crypto');

const data = 'Arya Parolia';
const hash = crypto.createHash('sha256').update(data).digest('hex');
console.log('Plain Text :', data ,', SHA-256 Hash:', hash);
