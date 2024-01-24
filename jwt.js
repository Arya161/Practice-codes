const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

const userData = {
  userId: 123,
  username: 'john_doe',
  role: 'user',
};

const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT Verification Failed:', err.message);
  } else {
    console.log('Decoded JWT:', decoded);
  }
});
