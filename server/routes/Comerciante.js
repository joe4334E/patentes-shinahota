import express from 'express';
import {
  getAllComerciantes,
  getComercianteById,
  createComerciante,
  updateComerciante,
  deleteComerciante,
} from '../controllers/Comerciante.js';

const router = express.Router();

router.get('/', getAllComerciantes);
router.get('/:id', getComercianteById);
router.post('/', createComerciante);
router.put('/:id', updateComerciante);
router.delete('/:id', deleteComerciante);

export default router;
