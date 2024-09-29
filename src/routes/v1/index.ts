import express from "express";
import path from "path";
import authRouter from './auth.route'
import { protect } from "../../middlewares/auth.middleware";

const router = express.Router()

router.get('/status', (req, res) => res.send("ok"))
router.use('/static', express.static(path.join(__dirname, '../../public')));

router.use('/auth', authRouter)

//authentication required routes.
router.use(protect)
router.get("/protected", (_, res) => res.send("Authenticated."))

export default router;
