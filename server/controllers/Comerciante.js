import Comerciante from '../models/Comerciante.js';

export const getAllComerciantes = async (req, res) => {
  try {
    const comerciantes = await Comerciante.findAll();
    res.json(comerciantes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getComercianteById = async (req, res) => {
  try {
    const comerciante = await Comerciante.findOne({
      where: { id: req.params.id },
    });
    res.json(comerciante);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createComerciante = async (req, res) => {
  try {
    const comerciante = await Comerciante.create(req.body);
    res.json({ message: "Registro creado exitosamente", comerciante });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateComerciante = async (req, res) => {
  try {
    await Comerciante.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteComerciante = async (req, res) => {
  try {
    await Comerciante.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
