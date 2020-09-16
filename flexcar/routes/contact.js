const express = require('express')
const router = express.Router()
const tickets = require('./../models/tickets')


router.get('/',(req,res)=> {
    res.render('contact.ejs')
})


router.post('/',async (req,res)=> {
    let ticket = new tickets({
        phone: req.body.custName,
        name: req.body.custName,
        email: req.body.custEmail,
    })
    console.log('lol')
    console.log(req.body.custName)
    try {
        ticket = await ticket.save()
        res.redirect(`/`)
    } catch(err) {
        console.log(err)
        res.render('contact')
    }
    
})


router.delete('/:id', async(req,res) => {
    await tickets.findByIdAndDelete(req.params.id)
    res.redirect('/admin/tickets')
})


module.exports = router