import http from "../http-common.js"

class WaitlistDataService {
    getAll() {
        return http.get("/queue/getCurrentQueue");
    }
    AddCustomer(fname, phone, size, preference) {
        return http.post("/queue", {phone, fname, size})
    }
}

export default new WaitlistDataService();