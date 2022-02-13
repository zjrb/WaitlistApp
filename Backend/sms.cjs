// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC75b7bed2978616db401c0befff90fa5c";
const authToken = "1e6ab3a46c80954ebcf3efa525b57333";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Kennedy! It is your lucky day! You are 5th on the waitlist!! (this was sent from the code!)',
     from: '+18126338786', // send using node sms.cjs
     to: '+19565610455' // use with caution :) we don't have a lot of credits
   })
  .then(message => console.log(message.sid));
