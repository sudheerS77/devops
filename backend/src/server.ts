import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.register(cors, {
  origin: 'http://localhost:5173',
});

app.get('/health', async () => ({ status: 'ok' }));

app.listen({ port: 3000 }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
