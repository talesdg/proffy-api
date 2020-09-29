import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHoursToMinutes';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionClontroller = new ConnectionController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionClontroller.index);
routes.post('/connections', connectionClontroller.create);

export default routes;