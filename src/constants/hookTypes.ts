import { HookTypesInterface } from '../hooks/hooks.interface';

const HOOK_TYPES: HookTypesInterface = {
  onRequest: 'onRequest',
  preParsing: 'preParsing',
  preValidation: 'preValidation',
  preHandler: 'preHandler',
  preSerialization: 'preSerialization',
  onError: 'onError',
  onSend: 'onSend',
  onResponse: 'onResponse',
  onClose: 'onClose',
  onRoute: 'onRoute',
  onRegister: 'onRegister',
};

export default HOOK_TYPES;
