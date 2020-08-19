import { Router } from 'https://deno.land/x/oak/mod.ts';

import { CarsController } from '../controllers/index.ts';

const router = new Router();

router
	.get('/', CarsController.root)
	.get('/api/v1/cars', CarsController.getCars)
	.get('/api/v1/cars/:id', CarsController.getCar);

export default router;
