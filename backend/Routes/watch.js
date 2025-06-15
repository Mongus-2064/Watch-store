import express from 'express';
import { addwatch ,deletewatch } from '../Controllers/watch.js';
import { adminauth } from '../Middleware/middleware.js';
const router = express.Router();

router.post("/add-watch",addwatch);
router.delete("/delete-watch/:id",adminauth,deletewatch);

export default router