import * as fastify from 'fastify';

import betsRoutesPlugin from '../../../modules/bets/bets.routes.plugin';

describe('/bets', () => {
  let server: fastify.FastifyInstance;

  beforeEach(async () => {
    server = fastify({});
    server.register(betsRoutesPlugin);
    await server.ready();

    jest.clearAllMocks();
  });

  it('POST returns 404', async (done) => {
    const response = await server.inject({ method: 'POST', url: '/bets/1' });
    expect(response.statusCode).toEqual(404);
    expect(response.payload).toMatchSnapshot();

    done();
  });
});
