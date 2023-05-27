 

 const json = {
  "type": "service_account",
  "project_id": "agile-internal",
  "private_key_id":  `${process.env.REACT_APP_FIREBASE_PRIVATE_KEY_ID}`,
  "private_key": `${process.env.REACT_APP_FIREBASE_PRIVATE_KEY}`,
  "client_email": "firebase-adminsdk-7dyhr@agile-internal.iam.gserviceaccount.com",
  "client_id": "106063202270002784105",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7dyhr%40agile-internal.iam.gserviceaccount.com"
};
 
module.exports = json