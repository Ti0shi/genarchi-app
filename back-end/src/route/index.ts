import express from 'express';
import lateRouter from './late.route';
import userRouter from './user.route';

const router = express.Router();

router.get('/health', (_req, res) => {
    res.status(200).send({ api: 'up' });
});

router.use('/late', lateRouter);
router.use('/user', userRouter);

export default router;