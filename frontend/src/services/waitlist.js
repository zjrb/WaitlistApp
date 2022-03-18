import http from "../http-common.js"

class WaitlistDataService {
    getAll() {
        return http.get("/queue");
    }
    AddCustomer(fname, phone, size, preference) {
        return http.post("/queue", {phone, fname, size})
    }
}

export default new WaitlistDataService();