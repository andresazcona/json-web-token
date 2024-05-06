// Controlador para el endpoint de contactos
function contacts(req, res) {
    // Datos ficticios de contactos
    const contactsList = ['Alice', 'Bob', 'Charlie'];
    res.status(200).json(contactsList);
}

module.exports = contacts;
