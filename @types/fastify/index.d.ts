import { Logger } from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance {
    swagger: any;
  }

  export interface FastifyReply<HttpResponse> {
    SSEClientId: string;
    log: Logger;
  }

  export interface FastifyRequest<HttpRequest> {
    user: { name: string; id: string };
  }
}
