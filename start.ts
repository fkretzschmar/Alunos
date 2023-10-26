import path from "path";
import swaggerAutogen from 'swagger-autogen';


const doc = {
  info: {
    title: 'API Escola',
    description: 'Esta API serve para consultar, atualizar, cadastrar e remover alunos da escola EE.Antonio Raposo Tavares.',
    version: '1.0.0'
  },
  host: 'localhost:5500',
  schemes: ['http'],
}; // update doc


const outputFile = './swagger-output.json';
const endpointsFiles = [path.join(__dirname, 'routes/routes.ts')];
swaggerAutogen()(outputFile, endpointsFiles, doc)