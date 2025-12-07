const jwt = require('jsonwebtoken');

function authorize(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).json({ error: 'JWT secret is not configured on the server' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    // Only extract necessary fields from the decoded payload
    if (
      typeof decoded.userId !== 'string' ||
      (decoded.role && typeof decoded.role !== 'string')
    ) {
      return res.status(401).json({ error: 'Invalid token payload' });
    }
    req.user = {
      userId: decoded.userId,
      role: decoded.role
    };
    next();
  } catch (err) {
    let errorMsg = 'Authorization denied';
    if (process.env.NODE_ENV !== 'production') {
      if (err.name === 'TokenExpiredError') {
        errorMsg = 'Token expired';
      } else if (err.name === 'JsonWebTokenError') {
        errorMsg = 'Invalid token';
      } else if (err.name === 'NotBeforeError') {
        errorMsg = 'Token not active';
      } else {
        errorMsg = 'Token verification failed';
      }
    }
    return res.status(401).json({ error: errorMsg });
  }
}

module.exports = authorize;