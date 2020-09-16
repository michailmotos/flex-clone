const express = require('express')
const router = express.Router()
const Cars = require('./../models/cars')


router.get('/:slug', async (req,res)=> {
    const car = await Cars.findOne({ slug: req.params.slug })
    if (car == null) res.redirect('/')
    res.render('show', {cars : car})
})

router.post('/',async (req,res)=> {
    let car = new Cars({
        manufacturer: req.body.manuf,
        model: req.body.model,
        cc: req.body.cc,
        price: req.body.price,
        size: req.body.size,
    })
    try {
        car = await car.save()
        res.redirect(`/cars/${car.slug}`)
    } catch(err) {
        console.log(err)
        res.render('admin/new')
    }
    
})

router.delete('/:id', async(req,res) => {
    await Cars.findByIdAndDelete(req.params.id)
    res.redirect('/admin/delete')
})

module.exports = router