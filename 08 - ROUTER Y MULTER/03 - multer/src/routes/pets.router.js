import { Router } from "express";
const router = Router();

const pets = [];

const middlewarePrueba = (req, res, next) =>{
    // console.log(req.url);
    if(req.body.name) next();
    else res.status(404).send('el campo name es obligatorio')
}

router.get('/', (req, res)=>{
    res.status(200).json(pets)
})

router.post('/', middlewarePrueba, (req, res)=>{
    const pet = req.body;
    pets.push(pet)
    res.status(200).json({msg: 'mascota agregada con éxito', pet})
})

export default router;