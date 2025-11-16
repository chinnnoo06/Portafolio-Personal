const path = require('path');

function descargarCV(res) {
  const filePath = path.join(__dirname, '../cv', 'CV.pdf');

  res.download(filePath, 'CV.pdf', (err) => {
    if (err) {
      console.error('Error al descargar CV:', err);
      // No intentes enviar respuesta aquí porque ya fue enviada o está en proceso.
      // Solo loguea el error.
    }
  });
}

module.exports = {
  descargarCV
};
