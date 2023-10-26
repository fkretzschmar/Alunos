import { Router } from "express";
import { Controller } from './controller';

const router = Router();

router.get("/", (req, res) => {
    // #swagger.ignore = true
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.redirect("/swagger");
});

router.get("/alunos", async (req, res) => {
    const content = await Controller.GetAll();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send(content);
});

router.get("/alunos/:id", async (req, res) => {
    const id = parseInt(req.params['id']);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    const content = await Controller.GetById(id);
    if (content === null) {
        res.status(404).send('Aluno não encontrado.');
    }

    res.send(content);
});

router.delete("/alunos/:id", async (req, res) => {
    const id = parseInt(req.params['id']);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    const content = await Controller.Delete(id);
    if (content === null) {
        res.status(404).send('Aluno não encontrado.');
    }
    res.send(content);
});

router.post("/alunos", async (req, res) => {
    // #swagger.parameters['nome'] = {type: 'string',required: true}
    // #swagger.parameters['idade'] = {type: 'number', required: true}
    // #swagger.parameters['nota_primeiro_semestre'] = {type: 'number', required: true}
    // #swagger.parameters['nota_segundo_semestre'] = {type: 'number', required: true}
    // #swagger.parameters['nome_professor'] = {type: 'string', required: true}
    // #swagger.parameters['numero_sala'] = {type: 'number', required: true}
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');


    const content = await Controller.Insert(req.query);
    if (content === null) {
        res.status(400).send('Dados Incorretos');
    }

    res.status(201).json(content);
})

router.put("/alunos", async (req, res) => {
    // #swagger.parameters['id'] = {type: 'integer',required: true}
    // #swagger.parameters['nome'] = {type: 'string',required: true}
    // #swagger.parameters['idade'] = {type: 'number', required: true}
    // #swagger.parameters['nota_primeiro_semestre'] = {type: 'number', required: true}
    // #swagger.parameters['nota_segundo_semestre'] = {type: 'number', required: true}
    // #swagger.parameters['nome_professor'] = {type: 'string', required: true}
    // #swagger.parameters['numero_sala'] = {type: 'number', required: true}
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    const content = await Controller.Edit(req.query);
    if (content === null) {
        res.status(400).send('Usuário não existe.');
    }

    res.status(200).json(content);
})


export default router; 