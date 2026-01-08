import express from 'express';
import { getUserAccountByUsername } from '../gb_controllers/UserAccountController.js';

const router = express.Router();

router.get('/userAccount/:username', getUserAccountByUsername);

export default router;