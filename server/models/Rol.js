// models/Rol.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Rol = db.define('roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default Rol;
