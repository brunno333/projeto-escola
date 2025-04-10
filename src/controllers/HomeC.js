import Aluno from '../models/Aluno';

class HomeC {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ludmila',
      sobrenome: 'Leonidio',
      email: 'ludi@gmail.com',
      idade: 28,
      peso: 63,
      altura: 1.98,
    });
    res.json(novoAluno);
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

export default new HomeC();
