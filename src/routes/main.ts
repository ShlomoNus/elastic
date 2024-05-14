import { check, login, signup } from 'handlers';
import { requestLogger } from 'middleware';
import { Route } from 'sn-types-backend';

export const routes: Route[] = [
    {
        method: 'post',
        path: '/users',
        middleware: [],
        handler: signup,
    },
    {
        method: 'post',
        path: '/users/healthcheck',
        middleware: [],
        handler: check,
    },
    {
        method: 'post',
        path: '/login',
        middleware: [requestLogger],
        handler: login,
    },
];
