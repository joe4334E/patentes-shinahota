// models/Usuario.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Rol from './Rol.js';

const Usuario = db.define('usuarios', {
  correo: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  roleid: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Usuario.belongsTo(Rol, { foreignKey: 'roleid' });
Rol.hasMany(Usuario, { foreignKey: 'roleid' });

export default Usuario;
