import Patente from '../models/Patente.js';

export const getAllPatentes = async (req, res) => {
  try {
    const patentes = await Patente.findAll();
    res.json(patentes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPatenteById = async (req, res) => {
  try {
    const patente = await Patente.findOne({
      where: { cod: req.params.id }, // Cambiado de 'id' a 'cod'
    });
    if (patente) {
      res.json(patente);
    } else {
      res.status(404).json({ message: "Patente no encontrada" }); // Manejo de error si no se encuentra
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPatente = async (req, res) => {
  try {
    const patente = await Patente.create(req.body);
    res.json({ message: "Registro creado exitosamente", patente });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePatente = async (req, res) => {
  try {
    const updated = await Patente.update(req.body, {
      where: { cod: req.params.id }, // Cambiado de 'id' a 'cod'
    });
    if (updated[0] === 1) {
      res.json({ message: "Registro actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Patente no encontrada" }); // Manejo de error si no se actualiza
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePatente = async (req, res) => {
  try {
    const deleted = await Patente.destroy({
      where: { cod: req.params.id }, // Cambiado de 'id' a 'cod'
    });
    if (deleted === 1) {
      res.json({ message: "Registro eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Patente no encontrada" }); // Manejo de error si no se elimina
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
