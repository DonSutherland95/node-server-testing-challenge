const express = require('express');
const Users = require('./userDb')

const router = express.Router();

router.get('/', (req, res) => {
  
  
  Users.get(req.query)
    .then(users=>{
      res.status(200).json(users)
    })
    .catch(error=>{
      res.status(500).json(error.message) 
    })
});

router.post('/', (req, res) => {
  if(!req.body.name){
    res.status(400).json({ message: 'name required' })
  }
  Users.insert(req.body)
    .then(user=>{
      res.status(201).json(user)
    })
    .catch(error=>{
      res.status(500).json({message: 'error adding user'})
    })
});

router.delete('/:id', (req, res) => {
  
  const {id} = req.params
  Users.remove(id)
    .then(user=>{
      if(user > 0){
        res.status(200)/*.json({ message: `user with id ${id} has been removed` })*/;
      } else{
        res.status(404).json({message:'user could not be found'})
      }
    })
    .catch(error=>{
      res.status(500).json({errorMessage: error.message})
    })
});

module.exports = router;
