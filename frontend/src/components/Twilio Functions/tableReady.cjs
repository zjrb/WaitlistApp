import react, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import WaitlistDataService from "../waitlist.js"
import TableReadyTwilio from "./sms.cjs";
import { SmsCommandContext } from "twilio/lib/rest/supersim/v1/smsCommand";

//<< Good Site for this >>\\ https://www.twilio.com/blog/send-an-sms-react-twilio
function TableReadyMessage() {

// const [waitlist, SetWaitlist] = useState([])

//   useEffect(() => {
//     retrieveWaitlist();
//   }, []);

//   const retrieveWaitlist = () => {
//     WaitlistDataService.getAll()
//     .then(response => {
//       console.log(response.data)
//       SetWaitlist(response.data.waitlist)
//     }).catch(e => {
//       console.log(e)
//     })
//   };

    return (
       
        alert("The customer  has been alerted that their table is ready (it really hasn't lol)")
    );
  }


  export default TableReadyMessage;
