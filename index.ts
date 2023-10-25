import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger-output.json';

dotenv.config();

const app = express();
const port = process.env.PORT || 5500;

app.use("/", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});