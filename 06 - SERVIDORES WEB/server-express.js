import express from 'express';
import { products } from './products.js';
import { UserManager } from './user.manager.js';
const userManager = new UserManager('./users.json');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    // res.send('Mi primer servidor con express')
    // res.json({msg: 'hola'})
    res.json(products);
    // res.render()
    // res.status(404).json({msg: 'ruta inexistente'})
});

app.get('/users', async(req, res)=>{
    try {
        const { age } = req.query;  //string    parseInt("36") = 36
        const { name } = req.query;
        console.log(age);
        console.log(name);
        const users = await userManager.getUsers();
        const usersFilter = users.filter(user => user.age <= parseInt(age))
        if(!age) res.json(users)
        else res.status(200).json(usersFilter);
        //! EDAD MENOR O IGUAL A: _value_ |BUSCAR| ---> GET http://localhost:8080/users?age=${value}
    } catch (error) {
        res.status(500).json({msg: 'Server error'})
    }
})

app.get('/user/:idUser', async(req, res)=>{
  try {
    const { idUser } = req.params
    console.log(idUser);
    const users = await userManager.getUsers();
    const user = users.find(user => user.id === parseInt(idUser));
    if(!user) res.status(404).json({msg: 'User not found'})
    else res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'Server error'})
  }
})

app.post('/user', (req, res)=>{
    console.log(req.body);
})

const PORT = 8080;

app.listen(PORT, ()=>console.log(`Server ok on port ${PORT}`))

