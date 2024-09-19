import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Patente = db.define('patentes', {
  cod: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Patente;
