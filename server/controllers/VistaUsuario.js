// controllers/vistaUsuarioController.js
import VistaUsuario from '../models/VistaUsuario.js';

export const getUsuarioData = async (req, res) => {
    try {
        const data = await VistaUsuario.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
