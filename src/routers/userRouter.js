// import express from 'express';
import { Router } from 'express';
// const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
import UsersController from '../controllers/UsersController';
const router = Router();

router.get('/', UsersController.findAllUser);
router.post('/create', UsersController.createUser);
// router.get('/:id', UsersController.getUser);
// router.patch('/:id/update', UsersController.updateUser);
// router.delete('/:id/delete', UsersController.deleteUser);

export default router;