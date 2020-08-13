import { startServer, stopServer } from './server';

const startApp = async (): Promise<void> => {
  startServer({ hostname: '0.0.0.0', httpPort: 4010 });
};

const stopApp = async (): Promise<void> => {
  await stopServer();
  process.exit(1);
};

process.on('SIGINT', function onSigint() {
  stopApp();
});

process.on('SIGTERM', function onSigterm() {
  stopApp();
});

startApp();
