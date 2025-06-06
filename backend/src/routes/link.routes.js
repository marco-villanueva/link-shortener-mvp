import { Router } from 'express';
import * as linkController from '../controllers/link.controller.js';

const router = Router();

router.post('/shorten', linkController.createShortLink);
router.get('/:shortCode', linkController.redirectToOriginalUrl);

export default router;