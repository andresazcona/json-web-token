const express = require('express');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./src/middleware/authMiddleware');
const authRoutes = require('./src/routes/authRoutes');
const profileController = require('./src/controllers/profileController');
const formController = require('./src/controllers/formController');
const contactsController = require('./src/controllers/contactsController');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

// Proteger endpoints
app.use('/api/profile', authMiddleware.verifyToken, profileController);
app.use('/api/form', authMiddleware.verifyToken, formController);
app.use('/api/contacts', authMiddleware.verifyToken, contactsController);

const PORT = process.env.PORT || 4000;

// Manejador de ruta para la raíz "/"
app.get("/", (req, res) => res.send("servidor en linea"));

// Manejador de ruta para cualquier otra ruta
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
