const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/enquiry', async (req, res) => {
  const { name, email, mobile, subject, message, productModel, productName } = req.body;

  console.log('Received enquiry:', req.body);

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  // Construct email text
  let emailText = `New Enquiry Received:\n\n`;
  if (name) emailText += `Name: ${name}\n`;
  if (email) emailText += `Email: ${email}\n`;
  if (mobile) emailText += `Mobile: ${mobile}\n`;
  if (productName) emailText += `Product: ${productName}\n`;
  if (productModel) emailText += `Model: ${productModel}\n`;
  if (subject) emailText += `Subject: ${subject}\n`;
  if (message) emailText += `Message: ${message}\n`;

  emailText += `\n---\nSent from https://rengoautomotives.com`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: subject || `New Enquiry from ${name || email}`,
    text: emailText,
  };

  try {
    if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS.trim() === '') {
      console.error('ERROR: EMAIL_PASS is empty in .env');
      return res.status(400).json({
        message: 'Backend Configuration Error',
        error: 'You need to set your Gmail App Password in backend/.env'
      });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Enquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Gmail connection failed. Check your credentials.', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Fuel Pump Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
