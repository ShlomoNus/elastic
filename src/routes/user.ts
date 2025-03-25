import { applyRoutes } from '@utils/backend';
import { Router } from 'express';
import { Route } from 'sn-types-backend';

const userRouter = Router();

export const routes: Route[] = [];

applyRoutes({ app: userRouter, routes });

export { userRouter };
