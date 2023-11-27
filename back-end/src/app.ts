import express, {
    type Request,
    type Application,
    type Response,
    type NextFunction,
} from 'express';
import cors from 'cors';
import router from './route/index';
import { ApiError } from './utils/ApiError';

export async function init(): Promise<express.Application> {
    const app: Application = express();

    // use cors for api calls
    app.use(cors());

    // handle JSON format
    app.use(express.json());

    app.use(router);

    // Error Handler : must be after route declaration
    app.use(function (
        err: unknown,
        _req: Request,
        res: Response,
        _next: NextFunction
    ) {
        if (err instanceof ApiError) {
            res.status(err.statusCode).send(err);
        } else {
            console.log(err);
            res.status(500).send('API Error');
        }
    });
    return app;
}
