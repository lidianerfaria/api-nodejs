import fastify from 'fastify';
import { knex } from './database';
import { env } from './env';
import { transactionsRoutes } from './routes/transaction';

const app = fastify();

app.register(transactionsRoutes, {
  prefix: 'transactions',
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running');
  });
