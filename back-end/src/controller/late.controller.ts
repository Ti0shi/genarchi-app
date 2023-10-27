import { Request, Response } from 'express';
import lateService from '../service/late.service';

async function fetchLateByUsers(req: Request, res: Response) {
    const lateByUser = await lateService.fetchLateByUsers();
    return res.status(200).send(lateByUser);
}

async function postLate(req: Request, res: Response) {
    const { startedAt, userId } = req.body;
    await lateService.postLate(startedAt, userId);
    return res.status(201).send('Late Added');
}

export default {
    fetchLateByUsers,
    postLate
}