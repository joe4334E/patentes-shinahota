// models/Tramite.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import ActividadEconomica from './ActividadEconomica.js';
import Comerciante from './Comerciante.js';

const Tramite = db.define('tramites', {
  codtramite: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  fechainicio: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechafin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  estadodeuda: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  estadopago: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  gestion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  codactividadeconomica: {
    type: DataTypes.INTEGER,
    references: {
      model: ActividadEconomica,
      key: 'id',
    },
  },
  codcomerciante: {
    type: DataTypes.INTEGER,
    references: {
      model: Comerciante,
      key: 'id',
    },
  },
});

Tramite.belongsTo(ActividadEconomica, { foreignKey: 'codactividadeconomica' });
Tramite.belongsTo(Comerciante, { foreignKey: 'codcomerciante' });
ActividadEconomica.hasMany(Tramite, { foreignKey: 'codactividadeconomica' });
Comerciante.hasMany(Tramite, { foreignKey: 'codcomerciante' });

export default Tramite;
