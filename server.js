const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir el uso de JSON
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.send('API de WellnessApp funcionando');
});

// Ruta para registro de usuarios (ejemplo básico)
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Aquí deberías agregar la lógica para guardar el usuario en la base de datos
    // Este es un ejemplo simple de cómo recibir los datos
    if (username && password) {
        res.status(201).json({ message: 'Usuario registrado con éxito', user: { username } });
    } else {
        res.status(400).json({ error: 'Faltan datos de registro' });
    }
});

// Ruta para login de usuarios (ejemplo básico)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí agregarías la lógica para autenticar al usuario
    // Esto es solo un ejemplo simple
    if (username === 'usuarioEjemplo' && password === 'contraseña123') {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
    }
});

// Servidor escuchando en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
