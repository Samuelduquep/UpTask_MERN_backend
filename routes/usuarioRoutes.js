import express from 'express';
import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    perfil
} from '../controllers/usuarioController.js';

import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();


//Autenticacion, registro y confirmacion de usuarios

//Rutas Publicas-----------------------------------------------------


router.post('/', registrar);
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);


//Rutas Privadas-----------------------------------------------------

router.get('/perfil',checkAuth, perfil)

export default router;