import { Router } from 'express';
// import BookController from './funcController'; // function 은 class static 처럼 사용할 수 없다.
import BookController from './controller';
const router = Router();
router.get('/', BookController.findAll);
