import { getBetsController } from './bets.controllers';
import betsRoutesSchemas from './bets.routes.schemas';
import { API_METHODS } from '../../constants/server';

export default {
  getBets: {
    url: '/bets',
    method: API_METHODS.get,
    controller: getBetsController,
    options: {
      schema: betsRoutesSchemas.getBets,
    },
  },
};
