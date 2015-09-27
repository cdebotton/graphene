import proxy from 'koa-proxy';
import config from './config';

export default function graphene(opts) {
  return function* grapheneMiddleware(next) {
    yield proxy({
      host: 'http://' + config.get('host') + ':' + config.get('port'),
    });
  };
}
