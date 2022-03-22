import http from "../http-common.js"

class WaitlistDataService {
    getAll() {
        return http.get("/queue");
    }
    AddCustomer(fname, phone, size, preference) {
        size = parseInt(size)
        return http.post("/queue?phone_number=" + phone + "&name=" + fname + "&partySize=" + size)
    }
    GetAverage() {
        return http.get("/queue/getAverageTimeInQueue")
    }
    delete(phone) {
        return http.delete("/queue/" + phone)
    }
}

export default new WaitlistDataService();