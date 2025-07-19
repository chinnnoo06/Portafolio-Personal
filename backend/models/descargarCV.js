const path = require('path');

function descargarCV(res) {
  const filePath = path.join(__dirname, '../cv', 'CV.pdf');

  res.download(filePath, 'CV.pdf', (err) => {
    if (err) {
      console.error('Error al descargar CV:', err);
      res.status(500).json({ success: false, message: 'Error al descargar el CV.' });
    }
  });
}

module.exports = {
  descargarCV
};
