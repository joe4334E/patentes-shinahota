// routes/vistaAdminRoutes.js
import express from 'express';
import { getAdminData } from '../controllers/VistaAdmin.js';

const router = express.Router();

router.get('/', getAdminData);

export default router;
