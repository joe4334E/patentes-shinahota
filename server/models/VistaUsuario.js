// models/vistausuario.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const VistaUsuario = sequelize.define('VistaUsuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ci_expd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codactividadeconomica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rotulocomercial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    montoactividad: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'vistausuario',
    timestamps: false,
});

export default VistaUsuario;
