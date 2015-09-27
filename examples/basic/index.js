import koa from 'koa';
import mount from 'koa-mount';
import graphene from '../../';

const app = koa();

app.use(mount('/admin', graphene()));

app.listen(3000);
