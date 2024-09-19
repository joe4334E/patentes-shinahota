import Tramite from '../models/Tramite.js';

export const getAllTramites = async (req, res) => {
  try {
    const tramites = await Tramite.findAll();
    res.json(tramites);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTramiteById = async (req, res) => {
  try {
    const tramite = await Tramite.findOne({
      where: { id: req.params.id },
    });
    res.json(tramite);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createTramite = async (req, res) => {
  try {
    const tramite = await Tramite.create(req.body);
    res.json({ message: "Registro creado exitosamente", tramite });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateTramite = async (req, res) => {
  try {
    await Tramite.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteTramite = async (req, res) => {
  try {
    await Tramite.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// En tu controlador
export const getTramites = async (req, res) => {
  try {
    const tramites = await Tramite.findAll();
    res.json(tramites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
