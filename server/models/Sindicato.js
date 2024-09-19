// models/Sindicato.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Sindicato = db.define('sindicatos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  zona: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

export default Sindicato;
