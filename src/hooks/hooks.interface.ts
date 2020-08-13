interface HookTypesInterface {
  preParsing: 'preParsing';
  onRequest: 'onRequest';
  preValidation: 'preValidation';
  preHandler: 'preHandler';
  preSerialization: 'preSerialization';
  onError: 'onError';
  onSend: 'onSend';
  onResponse: 'onResponse';
  onClose: 'onClose';
  onRoute: 'onRoute';
  onRegister: 'onRegister';
}

type HookHandlerInterface = (...args: any[]) => any;

interface HookInterface {
  type: any;
  handler: HookHandlerInterface;
}

export { HookInterface, HookTypesInterface, HookHandlerInterface };
