import { Router } from 'express';
import homeController from './controllers/homeController'
const router = Router();
router.get('/', (_, res) => {
    res.render('camera');
});
// router.get('pictures', homeController.homePage);
export default router;