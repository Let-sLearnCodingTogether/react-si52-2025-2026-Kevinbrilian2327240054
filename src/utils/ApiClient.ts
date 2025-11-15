import axios from "axios";

const ApiClient = axios.create({
    baseURL : "",
    headers : {
        "Accept" : "application/json"
    }
})

export default ApiClient