import express from 'express';
import {
  loginUsuario, 
  createUsuario,  // Esta función se encargará de crear un nuevo usuario en la base de datos.
} from '../controllers/Usuario.js';

const router = express.Router();

router.post('/login', loginUsuario);
router.post('/', createUsuario);

export default router;
