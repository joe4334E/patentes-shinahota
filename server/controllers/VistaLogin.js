// controllers/vistaLoginController.js
import VistaLogin from '../models/VistaLogin.js';

export const getLoginData = async (req, res) => {
    try {
        const data = await VistaLogin.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
