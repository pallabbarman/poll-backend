import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/', routes);

app.get('/', (_req: Request, res: Response) => {
    res.send('Successfully Running App!');
});

export default app;
