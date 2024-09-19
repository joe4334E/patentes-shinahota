// routes/vistaLoginRoutes.js
import express from 'express';
import { getLoginData } from '../controllers/VistaLogin.js';

const router = express.Router();

router.get('/', getLoginData);

export default router;
