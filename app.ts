import { oak, cors } from "./dependencies.ts";
import router from "./router.ts";

const {Application} = oak;
const app = new Application();

// routes
app.use(cors.oakCors());
app.use(router.routes())
app.use(router.allowedMethods())

export default app;