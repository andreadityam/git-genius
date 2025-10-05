import express from 'express';
import { generateCommitMessage } from '../controllers/commitController.js';

const router = express.Router();

router.post('/generate', generateCommitMessage);

export default router;

