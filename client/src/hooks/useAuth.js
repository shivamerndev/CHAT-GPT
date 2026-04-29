import { googleAuthService } from "../services/auth.service"

const useAuth = () => {

    const googleAuth = async (credentials) => {

        let res = await googleAuthService(credentials)

        console.log(res)
    }

    return { googleAuth }
}

export default useAuth