import express from "express";
import path from "path";

const router = express.Router()

router.get('/status', (req, res) => res.send("ok"))
router.use('/static', express.static(path.join(__dirname, '../../public')));


export default router;