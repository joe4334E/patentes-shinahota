// models/vistaadmin.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const VistaAdmin = sequelize.define('VistaAdmin', {
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
    zona: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechainicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechafin: {
        type: DataTypes.DATE,
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
    tableName: 'vistaadmin',
    timestamps: false,
});

export default VistaAdmin;
