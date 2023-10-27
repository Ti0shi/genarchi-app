import lateController from '../controller/late.controller';
import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await lateController.fetchLateByUsers(req, res);
    }
    catch (err) {
        next(err);
    }
});

router.post('', (req: Request, res: Response, next: NextFunction) => {
    try {
        lateController.postLate(req, res);
    }
    catch (err) {
        next(err);
    }
});

export default router;