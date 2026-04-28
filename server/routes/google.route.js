import { Router } from 'express'
import { googleAuth } from '../controllers/google.controller'

const router = Router()

router.post("/google-register",googleAuth)

export default router