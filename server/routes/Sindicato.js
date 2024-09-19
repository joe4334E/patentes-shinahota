import express from 'express';
import {
  getAllSindicatos,
  getSindicatoById,
  createSindicato,
  updateSindicato,
  deleteSindicato,
} from '../controllers/Sindicato.js';

const router = express.Router();

router.get('/', getAllSindicatos);
router.get('/:id', getSindicatoById);
router.post('/', createSindicato);
router.put('/:id', updateSindicato);
router.delete('/:id', deleteSindicato);

export default router;
