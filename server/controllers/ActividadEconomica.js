import ActividadEconomica from '../models/ActividadEconomica.js';

export const getAllActividadEconomicas = async (req, res) => {
  try {
    const actividades = await ActividadEconomica.findAll();
    res.json(actividades);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getActividadEconomicaById = async (req, res) => {
  try {
    const actividad = await ActividadEconomica.findOne({
      where: { id: req.params.id },
    });
    res.json(actividad);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createActividadEconomica = async (req, res) => {
  try {
    const actividad = await ActividadEconomica.create(req.body);
    res.json({ message: "Registro creado exitosamente", actividad });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateActividadEconomica = async (req, res) => {
  try {
    await ActividadEconomica.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteActividadEconomica = async (req, res) => {
  try {
    await ActividadEconomica.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
