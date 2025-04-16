"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoC {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll(
      {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura', 'email'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename']
        }
      });
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      const { nome, sobrenome, idade, peso, altura, email } = aluno;

      return res.json({ nome, sobrenome, idade, peso, altura, email });

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id,);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      const { nome, sobrenome, idade, peso, altura, email } = alunoAtualizado;

      return res.json({ nome, sobrenome, idade, peso, altura, email });

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura', 'email'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'filename']
        }
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

exports. default = new AlunoC();
