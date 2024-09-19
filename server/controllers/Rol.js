import Rol from '../models/Rol.js';

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getRolById = async (req, res) => {
  try {
    const rol = await Rol.findOne({
      where: { id: req.params.id },
    });
    res.json(rol);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createRol = async (req, res) => {
  try {
    const rol = await Rol.create(req.body);
    res.json({ message: "Registro creado exitosamente", rol });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateRol = async (req, res) => {
  try {
    await Rol.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Registro actualizado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteRol = async (req, res) => {
  try {
    await Rol.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
