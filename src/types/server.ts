import * as http2 from 'http2';
import * as https from 'https';
import * as http from 'http';

type PaginationType = {
  limit: number;
  offset: number;
};

type HttpServer =
  | http.Server
  | http2.Http2Server
  | http2.Http2SecureServer
  | https.Server;
type HttpRequest = http.IncomingMessage | http2.Http2ServerRequest;
type HttpResponse = http.ServerResponse | http2.Http2ServerResponse;

export { PaginationType, HttpServer, HttpRequest, HttpResponse };
