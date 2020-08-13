import { HealthStatuses } from './health.constants';
import MemoryUsage = NodeJS.MemoryUsage;

interface HealthStatusDTOInterface {
  status: HealthStatuses;
  uptime: string;
  pid: number;
  details: {
    hostname: string;
    cores: number;
    memory: MemoryUsage;
  };
  dependencies: {
    pulsar?: HealthStatuses;
  };
}

export { HealthStatusDTOInterface };
