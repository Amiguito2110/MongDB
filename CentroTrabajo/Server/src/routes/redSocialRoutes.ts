import { Router } from 'express';
import { redSocialController } from '../controllers/redSocialController';
import { validarToken } from '../middleware/auth';
class RedSocialRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.delete('/eliminarRed/:id', redSocialController.eliminarRed);
        this.router.get('/mostrar_todas_redes', redSocialController.mostrar_todas_redes);
        this.router.get('/listOne/:id', redSocialController.listOne);
        this.router.post('/crearRed', redSocialController.createRedSocial);
        this.router.put('/actualizarRed/:id', redSocialController.actualizarRed);
    }
}
const redSocialRoutes = new RedSocialRoutes();
export default redSocialRoutes.router;