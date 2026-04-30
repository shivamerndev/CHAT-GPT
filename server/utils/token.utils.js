import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../configs/env.js"


const generateToken = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: "3d" })
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

export { generateToken, verifyToken }