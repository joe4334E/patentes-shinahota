// models/Comerciante.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Sindicato from './Sindicato.js';
import Usuario from './Usuario.js';

const Comerciante = db.define('comerciantes', {
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  apellidopaterno: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  apellidomaterno: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  ci: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  expd: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  direccion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  otb: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  nombrecomercio: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  sindicatocod: {
    type: DataTypes.INTEGER,
    references: {
      model: Sindicato,
      key: 'id',
    },
  },
  usuariocod: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
  },
});

Comerciante.belongsTo(Sindicato, { foreignKey: 'sindicatocod' });
Comerciante.belongsTo(Usuario, { foreignKey: 'usuariocod' });
Sindicato.hasMany(Comerciante, { foreignKey: 'sindicatocod' });
Usuario.hasMany(Comerciante, { foreignKey: 'usuariocod' });

export default Comerciante;
