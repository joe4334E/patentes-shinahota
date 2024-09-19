// routes/vistaUsuarioRoutes.js
import express from 'express';
import { getUsuarioData } from '../controllers/VistaUsuario.js';

const router = express.Router();

router.get('/', getUsuarioData);

export default router;
