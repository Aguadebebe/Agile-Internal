/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});*/

const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Use bodyParser middleware to parse JSON request body
app.use(bodyParser.json());

// Define route for /submit-form endpoint
app.post('/submit-form', (req, res) => {
    const { name, phone, email, message } = req.body;
    const db = admin.firestore();

    // Save form data to Firestore database
    db.collection('contacts').add({
        name,
        phone,
        email,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log('Form submission successful!');
        res.status(200).send('Form submission successful!');
    }).catch((error) => {
        console.error('Error saving form data:', error);
        res.status(500).send('Error saving form data:', error);
    });
});

// Start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

c 