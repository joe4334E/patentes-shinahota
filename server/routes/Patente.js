import express from 'express';
import {
  getAllPatentes,
  getPatenteById,
  createPatente,
  updatePatente,
  deletePatente,
} from '../controllers/Patente.js';

const router = express.Router();

router.get('/', getAllPatentes);
router.get('/:id', getPatenteById);
router.post('/', createPatente);
router.put('/:id', updatePatente);
router.delete('/:id', deletePatente);

export default router;
