import { where } from "sequelize";
import Aluno from "../db/model_aluno";

export module Controller {

    export async function GetAll() {
        const alunos = await Aluno.findAll();
        return JSON.stringify(alunos, null, 2);
    }

    export async function GetById(ID: number) {
        const aluno = await Aluno.findOne({ where: { id: ID } });
        if (aluno === null) {
            return null;
        } else {
            return JSON.stringify(aluno);
        }
    }

    export async function Delete(ID: number) {
        const aluno = await Aluno.findOne({ where: { id: ID } });
        if (aluno === null) {
            return null;
        } else {
            await Aluno.destroy({ where: { id: ID } });
            return "OK";
        }
    }

    export async function Insert(body: any) {
        const {
            nome,
            idade,
            nota_primeiro_semestre,
            nota_segundo_semestre,
            nome_professor,
            numero_sala } = body;

        const alunoJaExiste = await Aluno.findOne({ where: { nome: nome } });

        if (alunoJaExiste !== null) {
            return null;
        }

        const aluno = await Aluno.create({
            nome, idade, nota_primeiro_semestre,
            nota_segundo_semestre, nome_professor, numero_sala
        });

        if (aluno === null)
            return null;

        return aluno;
    }

    export async function Edit(body: any) {
        const {
            id,
            nome,
            idade,
            nota_primeiro_semestre,
            nota_segundo_semestre,
            nome_professor,
            numero_sala } = body;

        const alunoJaExiste = await Aluno.findOne({ where: { id: id } });

        if (alunoJaExiste === null) {
            return null;
        }

        await Aluno.update({
            nome, idade, nota_primeiro_semestre,
            nota_segundo_semestre, nome_professor, numero_sala
        }, { where: { id: id } });

        return "OK";
    }
}