import { useDispatch } from "react-redux"
import { googleAuthService, profileService } from "../services/auth.service"
import { setUser } from "../store/features/auth.slice.js"

const useAuth = () => {

    const dispatch = useDispatch()

    const googleAuth = async (credentials) => {

        let res = await googleAuthService(credentials)
        if (res.status === 200) {
            getProfile()
        }
    }

    const getProfile = async () => {
        let profile = await profileService()
        dispatch(setUser(profile.data.user))
    }

    return { googleAuth, getProfile }
}

export default useAuth