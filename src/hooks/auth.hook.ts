import { FastifyReply, FastifyRequest } from 'fastify';

import hookTypes from '../constants/hookTypes';
import { HttpResponse } from '../types/server';

import { HookInterface } from './hooks.interface';

// hook to check token and write user to request obj
const authHook: HookInterface = {
  type: hookTypes.preHandler as any,
  handler: (
    req: FastifyRequest,
    res: FastifyReply<HttpResponse>,
    done: Function,
  ) => {
    const user = { name: 'Pavel Valentov', id: '1' };
    req.user = user;

    done();
  },
};

export default authHook;
