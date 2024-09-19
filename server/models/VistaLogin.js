// models/vista_login.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const VistaLogin = sequelize.define('VistaLogin', {
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    correo_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comerciante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre_comerciante: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'vista_login',
    timestamps: false,
});

export default VistaLogin;
