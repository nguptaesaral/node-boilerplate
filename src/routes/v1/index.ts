import express from "express";
import path from "path";
import authRouter from './auth.route'

const router = express.Router()

router.get('/status', (req, res) => res.send("ok"))
router.use('/static', express.static(path.join(__dirname, '../../public')));

router.use('/auth', authRouter)

export default router;
