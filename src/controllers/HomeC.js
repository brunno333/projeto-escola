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
}

export default new HomeC();
