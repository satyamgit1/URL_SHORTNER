const jwt = require("jsonwebtoken");
const secret = "satyam1234@$";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  try {
    if (!token) return null;
    return jwt.verify(token, secret);
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
