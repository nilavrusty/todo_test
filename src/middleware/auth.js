const jwt = require ('jsonwebtoken');
const User = require ('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header ('Authorization').replace ('Bearer ', '');
    const decode = jwt.verify (token, 'newcourse');
    const user = await User.findById (decode._id);

    if (!user) {
      throw new Error ();
    }

    req.user = user;
    next ();
  } catch (e) {
    res.status (401).send ({error: 'Please authenticate...'});
  }
};

module.exports = auth;
