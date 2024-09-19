import express from 'express';
import {
  getAllActividadEconomicas,
  getActividadEconomicaById,
  createActividadEconomica,
  updateActividadEconomica,
  deleteActividadEconomica,
} from '../controllers/ActividadEconomica.js';

const router = express.Router();

router.get('/', getAllActividadEconomicas);
router.get('/:id', getActividadEconomicaById);
router.post('/', createActividadEconomica);
router.put('/:id', updateActividadEconomica);
router.delete('/:id', deleteActividadEconomica);

export default router;
