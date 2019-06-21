import models from '../models/index'
class UserController{

  static createUser(req,res) {
    models.User.create(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }
    )
    .then((user) => res.status(201).send(user))
    .catch((error) => { res.status(400).send(error); });
  };

static findAllUser(req, res){
  models.User
    .findAll({ })
    .then((Users) => res.status(200).send(Users))
    .catch((error) => { res.status(400).send(error); });
}

static updateUser(req, res) {
   models.User
   .findOne({
    where: { id: req.params.id },
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
    user
        .update({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        })
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
}

static deleteUser(req, res) {
  models.User
  .findOne({
    where: { id: req.params.id },
  })
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(200).send({
          message: 'User Successful deleted',
        }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
}
}
export default UserController;