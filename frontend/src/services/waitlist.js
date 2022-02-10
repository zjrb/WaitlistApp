import http from "../http-common.js"

class WaitlistDataService {
    getAll() {
        return http.get("/");
    }
}

export default new WaitlistDataService();