import { healthController } from './health.controllers';
import healthRoutesSchemas from './health.routes.schemas';
import { API_METHODS } from '../../constants/server';

export default {
  healthCheck: {
    url: '/healthCheck',
    method: API_METHODS.get,
    controller: healthController,
    options: {
      schema: healthRoutesSchemas.healthCheck,
    },
  },
};
