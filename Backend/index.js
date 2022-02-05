import app from "./server.js"
import dotenv from "dotenv"
import WaitlistDAO from "./dao/waitlistDAO.js"
dotenv.config()
const Postgres = "fixme"

const port = process.env.PORT || 8000

//connect to db
//process.env.POSTGRES_DB_LINK

//.then(async client => {
//    console.log('listening on port ${port}`)
//})
//})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})