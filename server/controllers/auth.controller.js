import * as userDao from "../dao/user.dao.js"
import { OAuth2Client } from "google-auth-library";
import handleError from "../utils/error.utils.js";
import { GOOGLE_CLIENT_ID } from "../configs/env.js"
import { findUserByEmail } from "../dao/user.dao.js"
import { generateToken } from "../utils/token.utils.js";

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const googleAuth = handleError(async (req, res) => {

    const { idToken } = req.body;

    // verify token with google
    const ticket = await client.verifyIdToken({ idToken, audience: GOOGLE_CLIENT_ID });

    const payload = ticket.getPayload();

    const { name: fullname, email, picture } = payload;

    const isExist = await findUserByEmail(email)

    if (isExist) {

        let token = generateToken({ id: isExist._id, fullname })
        res.cookie("token", token)
        return res.status(200).json({ message: "LoggedIn Successfully." })
    }

    const response = await userDao.createUser({ fullname, email, picture })
    let token = generateToken({ id: response._id })

    res.cookie("token", token)
    res.status(201).json({ message: "User Registered Successfully.", success: true })
})