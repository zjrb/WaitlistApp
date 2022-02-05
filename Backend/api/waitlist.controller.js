import WaitlistDAO from "../dao/waitlistDAO.js";

export default class WaitlistController {
    static async apiGetWaitlist(req, res, next) {
        const { waitlist } = await WaitlistDAO.GetWaitlist()

        let response = {
            waitlist: waitlist
        }
        res.json(response)
    }
}