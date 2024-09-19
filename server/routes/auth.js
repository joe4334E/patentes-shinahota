// routes/auth.js
import express from 'express';
import { registerUsuario, loginUsuario } from '../controllers/Auth.js';

const router = express.Router();

router.post('/register', registerUsuario);
router.post('/login', loginUsuario);

export default router;
