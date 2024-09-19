/**
 * @class       : server
 * @author      : ale (ale@ale)
 * @created     : domingo sep 15, 2024 20:39:53 -04
 * @description : server
 */

import express from "express"; // Importa el framework Express
import bodyParser from "body-parser"; // Importa body-parser para manejar solicitudes JSON
import db from "./database/db.js"; // Importa la conexión a la base de datos
import cors from "cors";
import dotenv from "dotenv";

// Importa las rutas del backend
import actividadEconomicaRoutes from "./routes/ActividadEconomica.js";
import comercianteRoutes from "./routes/Comerciante.js";
import patenteRoutes from "./routes/Patente.js";
import rolRoutes from "./routes/Rol.js";
import sindicatoRoutes from "./routes/Sindicato.js";
import tramiteRoutes from "./routes/Tramite.js";
import usuarioRoutes from "./routes/Usuario.js";
import vistaAdminRoutes from './routes/VistaAdmin.js';
import vistaCajeroRoutes from './routes/VistaCajero.js';
import vistaUsuarioRoutes from './routes/VistaUsuario.js';
import vistaLoginRoutes from './routes/VistaLogin.js';
const app = express(); // Crea una instancia de la aplicación Express
const port = process.env.PORT || 8000; // Define el puerto, por defecto 8000

//Habilitar DOTENV
dotenv.config();

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(bodyParser.json()); // Permite que la aplicación interprete datos JSON en las solicitudes

// Middleware para las rutas
app.use("/api/actividades", actividadEconomicaRoutes); // Rutas para actividades económicas
app.use("/api/comerciantes", comercianteRoutes); // Rutas para comerciantes
app.use("/api/patentes", patenteRoutes); // Rutas para patentes
app.use("/api/roles", rolRoutes); // Rutas para roles
app.use("/api/sindicatos", sindicatoRoutes); // Rutas para sindicatos
app.use("/api/tramites", tramiteRoutes); // Rutas para trámites
app.use("/api/usuarios", usuarioRoutes); // Rutas para usuarios
app.use('/api/vistaadmin', vistaAdminRoutes);
app.use('/api/vistacajero', vistaCajeroRoutes);
app.use('/api/vistausuario', vistaUsuarioRoutes);
app.use('/api/vista_login', vistaLoginRoutes);

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Database connected...")) // Mensaje de éxito al conectar
  .catch((err) => console.error("Unable to connect to the database:", err)); // Mensaje de error si no se puede conectar

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Mensaje indicando que el servidor está corriendo
});

console.log("Esta funcionando", process.env.JWT_SECRET);
