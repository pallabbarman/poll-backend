import { Router } from 'express';
import pollRoutes from 'modules/poll/pollRoutes';
import userRoutes from 'modules/user/userRoutes';

interface RoutesType {
    path: string;
    route: Router;
}

const router = Router();

const routes: RoutesType[] = [
    {
        path: '/user',
        route: userRoutes,
    },
    {
        path: '/poll',
        route: pollRoutes,
    },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
