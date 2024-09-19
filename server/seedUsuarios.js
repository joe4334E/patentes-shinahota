import Usuario from './models/Usuario.js'; // Asegúrate de que la ruta sea correcta

const seedUsuarios = async () => {
  const usuarios = [
    // Usuarios
    { correo: 'maria.perez@example.com', password: 'M@ria123', roleid: 3 },
    { correo: 'carlos.gomez@example.com', password: 'C@rlos456', roleid: 3 },
    { correo: 'luisa.martinez@example.com', password: 'Luisa789!', roleid: 3 },
    
    // Cajeros
    { correo: 'cajero1@example.com', password: 'Cajero@123', roleid: 2 },
    { correo: 'cajero2@example.com', password: 'Cajero#456', roleid: 2 },
    { correo: 'cajero3@example.com', password: 'Cajero!789', roleid: 2 },
    
    // Administradores
    { correo: 'admin1@example.com', password: 'Admin@123', roleid: 1 },
    { correo: 'admin2@example.com', password: 'Admin#456', roleid: 1 },
    { correo: 'admin3@example.com', password: 'Admin!789', roleid: 1 },
  ];

  try {
    for (const usuario of usuarios) {
      await Usuario.create(usuario);
      console.log(`Usuario ${usuario.correo} creado.`);
    }
  } catch (error) {
    console.error('Error al crear usuarios:', error);
  }
};

seedUsuarios();
