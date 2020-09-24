const {ToDo, User} = require('../models')

class Controller{
    static Users(req,res){
        User.findAll()
        .then(users =>{
            res.render('users', {users})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static userCreateGet(req,res){
        res.render('createUser')
    }

    static UsersCreatePost(req, res){
        const {fullName,role,username,password} = req.body
        User.create({fullName,role,username,password})
        .then(users =>{
            res.redirect('/users')
        })
        .catch(err => res.send(err))
    }
    static UsersDelete(req,res){
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(users =>{
            res.redirect('/users')
        })
        .catch(err =>{
            if (err.name === 'SequelizeValidationError'){
                err = err.errors.map(element=>{
                    return element.message
                })
            }
            res.send(err)
        })
    }
    static UserEditGet(req,res){
      let dataUser = null
      User.findByPk(req.params.id)
      .then(data =>{
          dataUser = data
          res.render('editUser', {dataUser})
      })
      .catch(err =>{
          res.send(err)
      })
    }
    static UserEditPost(req,res){
        const {fullName,role,username,password} = req.body
        User.update({fullName,role,username,password},{
            where: {
                id: req.params.id
            }
        })
        .then(users =>{
            res.redirect('/users')
        })
        .catch(err =>{
            if (err.name === 'SequelizeValidationError'){
                err = err.errors.map(element=>{
                    return element.message
                })
            }
            res.send(err)
        })
    }
}

module.exports = Controller