import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);       // padroes -- index, show, create, update, delete
routes.get('/orphanages/:id', OrphanagesController.show);     
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;


// MVC 
// Model -- "representação da tabela no banco"
//Views -- como as coais sao vistas
//COntrollers -- lógca de nossas toras