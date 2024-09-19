// routes/vistaCajeroRoutes.js
import express from 'express';
import { getCajeroData } from '../controllers/VistaCajero.js';

const router = express.Router();

router.get('/', getCajeroData);

export default router;
