import express from "express"
import WaitlistCtrl from "./waitlist.controller.js"

const router = express.Router()

router.route("/").get(WaitlistCtrl.apiGetWaitlist)
router.route("/add").post(WaitlistCtrl.addToWaitlist)

export default router