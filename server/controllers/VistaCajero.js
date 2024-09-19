// controllers/vistaCajeroController.js
import VistaCajero from '../models/VistaCajero.js';

export const getCajeroData = async (req, res) => {
    try {
        const data = await VistaCajero.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
