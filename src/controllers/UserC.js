import User from '../models/User';

class UserC {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log('USER ID:', req.userId);
      console.log('USER EMAIL:', req.userEmail);
      res.json(users);

    } catch (e) {
      return res.json(null);
    }
  }
  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);

    } catch (e) {
      return res.json(null);
    }
  }
  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
  //delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(user);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }


};

export default new UserC();
