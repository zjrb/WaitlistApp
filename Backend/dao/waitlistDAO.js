//eventually this will return our waitlist from the dB

export default class WaitlistDAO {
    static async Connect() {
        return "success!"
    }

    static async GetWaitlist({
        organizationID = 0
    } = {}) {
        const waitlist = [
            {
                "size": 3,
                "numberInLine": 1,
                "phone": "775-247-1257",
                "waitingTime": "15",
                "quotedTime": "35",
                "status": "checkedIn"

            },
            {
                "size": 2,
                "numberInLine": 2,
                "phone": "775-247-1257",
                "waitingTime": "10",
                "quotedTime": "30",
                "status": "waiting"

            },
            {
                "size": 4,
                "numberInLine": 3,
                "phone": "775-247-1257",
                "waitingTime": "7",
                "quotedTime": "30",
                "status": "waiting"

            }
        ]
        try {
            return {waitlist}
        } catch {
            return {waitlist: []}
        }
    }
}