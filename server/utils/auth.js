// Importing the 'jsonwebtoken' library
const jwt = require('jsonwebtoken');

// Secret key used to sign and verify tokens
const secret = 'mysecretsshhhhh';

// Expiration time for the token
const expiration = '2h';

module.exports = {
  // Middleware function used for authentication
  authMiddleware: function ({ req }) {
    // Allows the token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If the token is sent via headers, extract it from the authorization header
    if (req.headers.authorization) {
      // Split the authorization header value into an array of two elements:
      // ['Bearer', '<tokenvalue>']
      token = token.split(' ').pop().trim();
    }

    // If no token is found, return the original request object
    if (!token) {
      return req;
    }

    try {
      // Verify the token using the secret key and specified expiration time
      const { data } = jwt.verify(token, secret, { maxAge: expiration });

      // Set the user data from the token payload to the 'user' property of the request object
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // Return the modified request object
    return req;
  },

  // Function for signing a new token
  signToken: function ({ firstName, email, _id }) {
    // Create the payload for the token containing user information
    const payload = { firstName, email, _id };

    // Sign the token using the payload, secret key, and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
