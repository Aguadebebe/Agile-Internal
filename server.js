const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();

const app = express();
 
// Use bodyParser middleware to parse JSON request body
app.use(bodyParser.json({limit: "20mb"}));
app.use(cors({
    origin: "http://localhost:3000"
}));

 
// Define route for /submit-form endpoint
app.post( "/api/contact", async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
        // send email using nodemailer
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const accessToken = await new Promise((resolve, reject) => {
             oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
             });
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type:  "OAUTH2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refresh_token: process.env.REFRESH_TOKEN,
            },
        });

        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.EMAIL,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error ocurred while sending the email." });

    }
    
});

// Start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

