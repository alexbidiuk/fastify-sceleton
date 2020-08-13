import { FastifyReply, FastifyRequest } from 'fastify';
import { HttpResponse } from '../../types/server';

const getBetsController = (
  req: FastifyRequest,
  res: FastifyReply<HttpResponse>,
) => {
  console.log('hi');
};

export { getBetsController };
