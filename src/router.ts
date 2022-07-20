import { Router } from 'express';
import homeController from './controllers/homeController'
const router = Router();
router.get('/', (_, res) => {
    // router.get('pictures', homeController.homePage);
    res.render('camera');
});
export default router;