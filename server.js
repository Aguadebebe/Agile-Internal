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
            process.env.REACT_APP_CLIENT_ID_1,
            process.env.REACT_APP_CLIENT_SECRET_1,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REACT_APP_OUATH_REFRESH_TOKEN_1,
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
                user: process.env.REACT_APP_EMAIL_1,
                accessToken,
                clientId: process.env.REACT_APP_CLIENT_ID_1,
                clientSecret: process.env.REACT_APP_CLIENT_SECRET_1,
                refresh_token: process.env.REACT_APP_OUATH_REFRESH_TOKEN_1,
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


const oauth2Client = new OAuth2(
    process.env.REACT_APP_CLIENT_ID_2,
    process.env.REACT_APP_CLIENT_SECRET_2,
    "https://developers.google.com/oauthplayground"
);
  
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
  
oauth2Client.setCredentials({
    refresh_token: process.env.REACT_APP_OAUTH_REFRESH_TOKEN_2,
});

 
const redirectUri = encodeURIComponent('https://developers.google.com/oauthplayground');
app.get("/api/auth/url", (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
      redirect_uri: redirectUri
    });
    res.redirect(authUrl);
});
  
app.get("/api/auth/callback", async (req, res) => {
  const { code } = req.query;
  
    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
  
      if (tokens.refresh_token) {
        process.env.REACT_APP_REFRESH_TOKEN_2 = tokens.refresh_token;
      }
  
      res.status(200).json({ message: "Access token set successfully" });
    } catch (error) {
      console.error("Error setting access token:", error);
      res.status(500).json({ error: "Failed to set access token" });
    }
});

// This connects to the axios function in the Schedule.js component.
app.get("/api/events", async (req, res) => {
    try {
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
      const response = await calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });
  
      const events = response.data.items.map((item) => ({
        title: item.summary,
        start: item.start.dateTime || item.start.date,
        end: item.end.dateTime || item.end.date,
      }));
  
      res.json({ events });
    } catch (error) {
      console.error("Error fetching events from Google Calendar:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
});

  
  

// Start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// fix  scale responsiveness for all pages

// Host on Firebase

// Make permanent OAuth Accounts

// Get Blakes pictures - log - video's etc.....

// Add HTTPS to URL and Favicon