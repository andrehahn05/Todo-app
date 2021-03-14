import { Router } from 'express';
import TaskController from '../Controller/TaskController'; 
import TaskValidation from '../middlewares/TaskValidation ';

const router = new Router();

router.post('/task', TaskValidation, TaskController.store);
router.put('/task/:id', TaskValidation, TaskController.update);
router.get('/task', TaskController.index);
router.get('/task/:id', TaskController.show);
router.delete('/task/:id', TaskController.delete);
router.put('/task/:id/:done', TaskController.done);

router.get('/task/filter/all/:macaddress', TaskController.all);
router.get('/task/filter/late/:macaddress', TaskController.late);
router.get('/task/filter/today/:macaddress', TaskController.today);
router.get('/task/filter/week/:macaddress', TaskController.week);
router.get('/task/filter/month/:macaddress', TaskController.month);
router.get('/task/filter/year/:macaddress', TaskController.year);

export default router;
