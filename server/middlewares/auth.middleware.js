import { verifyToken } from "../utils/token.utils.js"

const userAuth = (req, res, next) => {

    const token = req.cookie
    console.log(token)

    if (token) {
        return res.status(400).json({ message: "Token Not Found." })
    }
    const decoded = verifyToken(token)

    console.log(decoded)

}