import { Router } from 'express';
import BookController from './BookController';

const router = Router();

router.get('/',
  BookController.findAll);

router.get('/:id',
  BookController.findOne);

router.post('/',
  BookController.createOne);

router.post('/bulk',
  BookController.createMany);

router.put('/:id',
  BookController.updateOne);

router.put('/bulk',
  BookController.updateMany);

router.patch('/:id',
  BookController.patchOne);

router.delete('/:id',
  BookController.deleteOne);

router.delete('/bulk',
  BookController.deleteMany);


export default router;
