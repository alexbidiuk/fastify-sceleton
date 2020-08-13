export default {
  healthCheck: {
    response: {
      200: {
        type: 'object',
        description: 'Service is healthy',
        properties: {
          status: { type: 'string' },
          uptime: { type: 'string' },
          pid: { type: 'number' },
          details: {
            type: 'object',
            properties: {
              hostname: { type: 'string' },
              cores: { type: 'number' },
              memory: {
                type: 'object',
                properties: {
                  rss: { type: 'number' },
                  heapTotal: { type: 'number' },
                  heapUsed: { type: 'number' },
                  external: { type: 'number' },
                  arrayBuffers: { type: 'number' },
                },
              },
            },
          },
          dependencies: {
            type: 'object',
            properties: {
              pulsar: { type: 'string' },
            },
          },
        },
      },
      500: {
        type: 'object',
        description: 'Service is unhealthy',
        properties: {
          statusCode: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};
