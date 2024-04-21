const mongoose = require('mongoose');

export const DB = {
  isConnected: false,
  connect,
};

async function connect() {
  if (DB.isConnected) {
    return;
  } else {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to DB');
    DB.isConnected = true;
  }
}

export default mongoose;
