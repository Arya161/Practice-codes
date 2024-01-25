const express = require('express');
const { expressjwt: jwt } = require("express-jwt");

const app = express();

const secretKey = 'Arya_Parolia';

app.use(jwt({ secret: secretKey, algorithms:['HS256'] }));

app.get('/protected', (req, res) => {
  res.send('You have access to this protected route!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
