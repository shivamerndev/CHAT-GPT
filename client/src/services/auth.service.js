import axios from "../utils/axios.utils"

export const googleAuthService = (credentials) => {
    return axios.post("/auth/google", {idToken : credentials.credential})
}

export const profileService = ()=>{
    return axios.get("/auth/profile")
} 