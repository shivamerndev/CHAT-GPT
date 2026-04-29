import userModel from "../models/user.model.js"

const findUserByEmail = async (email) => {
    const user = await userModel.findOne({ email })
    return user;
}

const createUser = async (data) => {
    const newUser = await userModel.create(data)
    return newUser
}

export {findUserByEmail,createUser}