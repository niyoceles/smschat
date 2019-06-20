import models from '../models/index'
class UserController{

  static createUser(req,res) {
    models.User.create(
      {
        username: req.body.username,
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
}
export default UserController;