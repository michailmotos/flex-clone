const express = require('express')
const app = express()
const carsRouter = require('./routes/cars')
const adminRouter = require('./routes/admin')
const contactRouter = require('./routes/contact.js')
const faqRouter = require('./routes/faq.js')
const car = require('./models/cars')
const ticket = require('./models/tickets')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/flexcar', { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true);

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('/', async (req,res)=> {
    const cars = await car.find().sort({ createdAt: 'desc'})
    res.render('index', { cars: cars})
})

app.get('/cars/city', async (req,res)=> {
    const cars = await car.find({size: "0"}).sort({ price: 'asc'})
    res.render('cars', { cars: cars})
})

app.get('/cars/compact', async (req,res)=> {
    const cars = await car.find({size: "1"}).sort({ price: 'asc'})
    res.render('cars', { cars: cars})
})

app.get('/cars/suvs', async (req,res)=> {
    const cars = await car.find({size: "2"}).sort({ price: 'asc'})
    res.render('cars', { cars: cars})
})

app.get('/cars/vans', async (req,res)=> {
    const cars = await car.find({size: "3"}).sort({ price: 'asc'})
    res.render('cars', { cars: cars})
})

app.get('/cars', async (req,res)=> {
    const cars = await car.find().sort({ price: 'asc'})
    res.render('cars', { cars: cars})
})

app.get('/admin/delete', async (req,res)=> {
    const cars = await car.find().sort({ createdAt: 'desc'})
    res.render('admin/delete', { cars: cars})
})

app.get('/admin/tickets', async (req,res)=> {
    const tickets = await ticket.find().sort({ createdAt: 'desc'})
    res.render('admin/tickets', { tickets: tickets})
})

app.use('/cars',carsRouter)
app.use('/admin',adminRouter)
app.use('/contact',contactRouter)
app.use('/faq',faqRouter)
app.listen(5000)