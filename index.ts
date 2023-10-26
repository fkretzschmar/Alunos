import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger-output.json';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const options = {
  swaggerOptions: {
    url: 'https://gist.githubusercontent.com/fkretzschmar/0ac05c13c3dac3edd69d4945f9f0b727/raw/6833f704f09ba1bea4eb9bcd22520401e7d5738d/swagger.json'
  }
}

app.use("/", router);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(undefined, options));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});