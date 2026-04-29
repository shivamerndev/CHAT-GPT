import axios from "../utils/axios.utils"

export const googleAuthService = (credentials) => {
    return axios.post("/auth/google", {idToken : credentials.credential})
}