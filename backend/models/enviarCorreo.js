const nodemailer = require('nodemailer');

async function enviarEmail (nombre, correo, encabezado, mensaje, callback) {
    console.log('nombre', nombre);
    console.log('correo', correo);
    console.log('encabezado', encabezado);
    console.log('mensaje', mensaje);

    try {
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'inda5054@gmail.com',
            pass: 'ssgp dhez nxkf nsad'
        }
        });

        // Contenido del correo
        const mailOptions = {
        from: 'inda5054@gmail.com',         // correo autenticado
        to: 'inda5054@gmail.com',           // correo como destino
        replyTo: correo,                    // Para poder responder al usuario
        subject: encabezado,
        text: `
        📬 Nuevo mensaje desde el formulario de contacto:

        👤 Nombre: ${nombre}
        ✉️ Correo: ${correo}

        📝 Mensaje:
        ${mensaje}

        ------------------------------------
        Este correo fue enviado desde tu sitio web.
        `
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        callback(null, { success: true, message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
}


module.exports = {
  enviarEmail
};