import * as os from 'os';
import { HealthStatusDTOInterface } from './health.types';
import { HealthStatuses } from './health.constants';

const _formStatusString = (isALive: boolean): HealthStatuses => {
  if (isALive) {
    return HealthStatuses.OK;
  }
  return HealthStatuses.FAIL;
};

const getStatus = (): HealthStatusDTOInterface => {
  const isAllAlive = true;
  return {
    status: _formStatusString(isAllAlive),
    pid: process.pid,
    uptime: `${process.uptime()}s`,
    details: {
      hostname: os.hostname(),
      cores: os.cpus().length,
      memory: process.memoryUsage(),
    },
    dependencies: {
      some_dep: _formStatusString(true),
    },
  };
};

export { getStatus };
