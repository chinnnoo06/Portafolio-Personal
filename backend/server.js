const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const enviarCorreo = require('./models/enviarCorreo');
const descargarCV = require('./models/descargarCV');

app.get('/api/descargarcv', (req, res) => {
  descargarCV.descargarCV(res);
});

app.post('/api/enviarcorreo', (req, res) => {
  const { nombre, correo, encabezado, mensaje } = req.body;

  enviarCorreo.enviarEmail(nombre, correo, encabezado, mensaje, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error al enviar',
        error: err.message
      });
    }

    res.json({
      success: true,
      message: 'Correo enviado'
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
