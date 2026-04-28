import { Router } from 'express'

const router = Router()

router.get('/login', (req, res) => {
    // Handle login logic here
    res.send('Login successful')
})

export default router