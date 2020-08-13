const swaggerConfig = {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Sceleton swagger',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:4010',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['text/event-stream'],
  },
  exposeRoute: true,
};

export default swaggerConfig;
