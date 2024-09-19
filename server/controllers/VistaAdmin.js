// controllers/vistaAdminController.js
import VistaAdmin from '../models/VistaAdmin.js';

export const getAdminData = async (req, res) => {
    try {
        const data = await VistaAdmin.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
