const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    res.render('admin/admin')
})
router.get('/new',(req,res)=> {
    res.render('admin/new')
})

router.get('/delete',(req,res)=> {
    res.render('admin/delete')
})

router.get('/tickets',(req,res)=> {
    res.render('admin/tickets')
})

module.exports = router