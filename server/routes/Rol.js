import express from 'express';
import {
  getAllRoles,
  getRolById,
  createRol,
  updateRol,
  deleteRol,
} from '../controllers/Rol.js';

const router = express.Router();

router.get('/', getAllRoles);
router.get('/:id', getRolById);
router.post('/', createRol);
router.put('/:id', updateRol);
router.delete('/:id', deleteRol);

export default router;
