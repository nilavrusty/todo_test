const mongoose = require ('mongoose');

const connetDb = async () => {
  try {
    await mongoose.connect (
      'mongodb+srv://dbUser:dbUser123@cluster0-zop7g.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log ('db connected');
  } catch (e) {
    console.log ('not connected', e);
  }
};

module.exports = connetDb;
