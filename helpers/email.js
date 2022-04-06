import nodemailer from 'nodemailer';

export const emailRegistro = async datos => {
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //Informacion del Email

      const info = await transport.sendMail({
        from: '"UpTask Admin de Proyecto" <cuenta@uptask.com>', // sender address
        to: email, // list of receivers
        subject: "Uptask - Comprueba tu cuenta ✔", // Subject line
        text: "Comprueba tu cuenta Uptask", // plain text body
        html: ` <p> Hola: ${nombre} Comprueba tu cuenta</p>
        <p>Hace falta solo un paso para confirmar tu cuenta, haz click en el siguiente enlace: 
        <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Comprobar Cuenta</a>
        </p>
        
        <p>Si no creaste esta cuenta puedes eliminar este mensaje</p>

        `, // html body
      });
};
export const emailRecuperar = async datos => {
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

      //Informacion del Email

      const info = await transport.sendMail({
        from: '"UpTask Admin de Proyecto" <cuenta@uptask.com>', // sender address
        to: email, // list of receivers
        subject: "Uptask - Recupera tu cuenta ✔", // Subject line
        text: "Recupera tu cuenta Uptask", // plain text body
        html: ` <p> Hola: ${nombre} Recupera tu cuenta</p>
        <p>Hace falta solo un paso para recuperar tu cuenta, haz click en el siguiente enlace: 
        <a href='${process.env.FRONTEND_URL}/olvide-password/${token}'>Recuperar Cuenta</a>
        </p>
        
        <p>Si no solicitaste este mensaje puedes eliminar este mensaje</p>

        `, // html body
      });
};