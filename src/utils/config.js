const URL = {
  EMAIL_SEND: process.env.SENDGRID_API
};

const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": process.env.SENDGRID_AUTHORIZATION
};

module.exports= { URL,HEADERS }