const { URL ,HEADERS} = require('./../utils/config')
const axios =require('axios');

const mailScheduled = (req, res) => {
  const { timestamp } = req.body
  const todayTimestamp = (new Date()).getTime();
  const setTimeDelay = (timestamp-todayTimestamp)
  // console.log('TIME_DELAY', todayTimestamp, timestamp, (timestamp-todayTimestamp) )
  
  setTimeout(()=> mailSending(req), setTimeDelay)
  
  res
    .status(200)
    .json({
      status: "success",
      message: "Email scheduled successfully",
    });
}

const mailSending = (req) => {
  const { email, name } = req.body;

  const PAYLOAD={
    personalizations: [
      {
        to: [
          {
            email:email,
            name: name
          }
        ],
        subject: "Welcome - test job"
      }
    ],
    from: {
      email: "test-1511.support@mail.com",
      "name": "Support Mail"
    },
    reply_to: {
      email: "no-reply@mail.com",
      name: "NO-REPLY Mail"
    },
    content: [
      {
        type: "text/html",
        value: "This is Scheduled mail from TEST-1511"
      }
    ]
  }
  
  axios
    .post(URL.EMAIL_SEND, PAYLOAD, { headers: HEADERS })
    .then(result => {
      // res
      //   .status(200)
      //   .json({
      //     status: "success",
      //     message: "Email Send successfully",
      //     result: result.status
      //   });
    })
    .catch(err => {
      // res.status(404).json({ error: err.error });
    });
}

module.exports= { mailSending, mailScheduled };