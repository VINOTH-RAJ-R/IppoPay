const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/passwordchecker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const passwordSchema = new mongoose.Schema({
  password: String,
  isPasswordStrong: Boolean,
  stepsToMakeStrong: Number,
});

// Explicitly specifying the collection name as 'passwords'
const PasswordModel = mongoose.model('Password', passwordSchema, 'passwords');

app.post('/api/password', async (req, res) => {
  try {
    const { password, isPasswordStrong, stepsToMakeStrong } = req.body;

    const newPassword = new PasswordModel({
      password,
      isPasswordStrong,
      stepsToMakeStrong,
    });

    await newPassword.save();

    res.status(200).json({ message: 'Password data saved successfully.' });
  } catch (error) {
    console.error('Error saving password data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
