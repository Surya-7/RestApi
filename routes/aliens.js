const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')
router.get('/',async(req,res)=>{
    try{
        const alien = await Alien.find()
        res.json(alien)
    }
    catch(err){
        res.send(err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        res.send(err)
    }
})
router.post('/',async(req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        console.log(err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)

    }catch(err){
        res.send(err) 
    }
})
module.exports = router
