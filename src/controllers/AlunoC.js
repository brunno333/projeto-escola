import Aluno from '../models/Aluno';

class AlunoC {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await aluno.destroy();
      return res.json(aluno);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }



}

export default new AlunoC();
