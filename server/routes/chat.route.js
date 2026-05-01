import { Router } from "express";
import userAuth from "../middlewares/auth.middleware.js";
import { handleMessage } from "../controllers/chat.controller.js";

const chatRouter = Router();

/**
 * @routes POST /api/chats
 * @argument req.body = {content:string,chatId:string?}
 */
chatRouter.post("/",userAuth, handleMessage);


export default chatRouter;