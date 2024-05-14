import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.render('vista1')
})

router.get('/vista2', (req, res)=>{
    res.render('vista2', { layout: 'main2.handlebars' })
})

router.get('/vista3', (req, res)=>{
    const user = {
        firstname: 'Juan',
        lastname: 'Perez'
    };
    res.render('vista3', { user })
})

const users = [
    {
        firstname: 'Juan',
        lastname: 'Perez',
        age: 34,
        mail: 'juan@mail.com',
        phone: "65458942"
    },
    {
        firstname: 'Carlos',
        lastname: 'Perez',
        age: 30,
        mail: 'car@mail.com',
        phone: "6767676"
    },
    {
        firstname: 'Juana',
        lastname: 'Perez',
        age: 36,
        mail: 'juani@mail.com',
        phone: "6577"
    },
    {
        firstname: 'Ernestina',
        lastname: 'Perez',
        age: 31,
        mail: 'ernes@mail.com',
        phone: "43535"
    }
];

router.get('/actividad1', (req, res)=>{
    const random = Math.floor(Math.random() * 4);
    const user = users[random];
    res.render('actividad1', { user });
})

router.get('/list', (req, res)=>{
    res.render('list', { users })
})

router.get('/list2', (req, res)=>{
    res.render('list2', { users })
})


export default router;