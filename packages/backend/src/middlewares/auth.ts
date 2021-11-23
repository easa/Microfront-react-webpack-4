/* eslint-disable import/prefer-default-export */
// set dependencies - code omitted

import jwt from 'express-jwt';
import JwksRsa from 'jwks-rsa';

// Enable CORS - code omitted

// Create middleware for checking the JWT
export const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint
  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-46vs91oc.us.auth0.com/.well-known/jwks.json',
  }),
  // Validate the audience and the issuer
  audience: 'http://localhost:5000',
  issuer: 'https://dev-46vs91oc.us.auth0.com/',
  algorithms: ['RS256'],
});

// export const jwtCheck = jwt({
// secret: jwks.expressJwtSecret({
//   cache: true,
//   rateLimit: true,
//   jwksRequestsPerMinute: 5,
//   jwksUri: 'https://dev-46vs91oc.us.auth0.com/.well-known/jwks.json',
// }),
// audience: 'http://localhost:5000',
// issuer: 'https://dev-46vs91oc.us.auth0.com/',
// algorithms: ['RS256'],
// });

// Enable the use of request body parsing middleware - code omitted

// create timesheets API endpoint - code omitted
// app.post('/timesheets', checkJwt, (req, res) => {
//   const timesheet = req.body;

//   // Save the timesheet to the database...

//   // send the response
//   res.status(201).send(timesheet);
// });
// launch the API Server at localhost:8080 - code omitted
