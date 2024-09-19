// models/ActividadEconomica.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Patente from './Patente.js';

const ActividadEconomica = db.define('actividadeseconomicas', {
  codactividad: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  tipoactividad: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  descripcionactividad: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  rotulocomercial: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  montoactividad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  codpatente: {
    type: DataTypes.STRING(50),
    references: {
      model: Patente,
      key: 'cod',
    },
  },
});

ActividadEconomica.belongsTo(Patente, { foreignKey: 'codpatente' });
Patente.hasMany(ActividadEconomica, { foreignKey: 'codpatente' });

export default ActividadEconomica;
