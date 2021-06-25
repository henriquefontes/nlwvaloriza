import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)

export { router }