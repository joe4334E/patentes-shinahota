import Sindicato from '../models/Sindicato.js';

export const getAllSindicatos = async (req, res) => {
  try {
    const sindicatos = await Sindicato.findAll();
    res.json(sindicatos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSindicatoById = async (req, res) => {
  try {
    const sindicato = await Sindicato.findOne({
      where: { id: req.params.id },
    });
    res.json(sindicato);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createSindicato = async (req, res) => {
  try {
    const sindicato = await Sindicato.create(req.body);
    res.json({ message: "Registro creado exitosamente", sindicato });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateSindicato = async (req, res) => {
  try {
    await Sindicato.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteSindicato = async (req, res) => {
  try {
    await Sindicato.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
