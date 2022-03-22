import http from "../http-common.js"

class WaitlistDataService {
    getAll() {
        return http.get("/queue");
    }
    AddCustomer(fname, phone, size, preference) {
        size = parseInt(size)
        return http.post("/queue?phone_number=" + phone + "&name=" + fname + "&partySize=" + size)
    }
}

export default new WaitlistDataService();