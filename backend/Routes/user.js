import express from 'express';
import { userlogin, usersignup } from '../Controllers/user.js';

const router = express.Router();

router.post("/login",userlogin);
router.post("/signup",usersignup);

export default router;