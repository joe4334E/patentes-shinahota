// models/vistacajero.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const VistaCajero = sequelize.define('VistaCajero', {
    codactividadeconomica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rotulocomercial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombrecomercio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zona: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estadopago: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    montoactividad: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'vistacajero',
    timestamps: false,
});

export default VistaCajero;
