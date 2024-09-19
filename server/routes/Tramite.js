import express from 'express';
import {
  getAllTramites,
  getTramiteById,
  createTramite,
  updateTramite,
  deleteTramite,
} from '../controllers/Tramite.js';

const router = express.Router();

router.get('/', getAllTramites);
router.get('/:id', getTramiteById);
router.post('/', createTramite);
router.put('/:id', updateTramite);
router.delete('/:id', deleteTramite);

export default router;
