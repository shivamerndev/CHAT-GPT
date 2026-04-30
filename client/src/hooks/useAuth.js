import { googleAuthService  , profileService } from "../services/auth.service"

const useAuth = () => {

    const googleAuth = async (credentials) => {

        let res = await googleAuthService(credentials)
        console.log(res.data)
    }

    const getProfile = async () => {
        let profile = await profileService()
        console.log(profile.data)
    }

    return { googleAuth }
}

export default useAuth