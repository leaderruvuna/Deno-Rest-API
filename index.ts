import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/index.ts';
const port = 6000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });
console.log(` >>>> server is running on port ${port}`);
