const express = require('express')
const app = express()

const body_parser = require('body-parser')

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))


//CONFIGURE OBJECT//
let config = {
    port: process.env.PORT || 3000
}

//SERVER//

app.listen(config.port, function() {
    console.log('Server is running')
})

let data = []



// POST ROUTE

app.post('/addresto', control, function(req, res) {

    data.push(
        restaurant = {
            name: req.body.name,
            kindOfRestaurant: req.body.kindOfRestaurant,
            specials: req.body.specials

        })

    res.send('Data received')
    res.status(201)

})

//POST METHOD MIDDLEWARE //

function control(req, res, next) {

    if (data.find(restaurant => restaurant.name === req.body.name)) {
        res.status(400)
        res.send('Name is already exists')
    } else {
        next()
    }
}



// GET ROUTE //

app.get('/listresto', function(req, res) {
    res.send(data)
})



//"KINDOFTYPE" RESTO GET ROUTE/


app.get('/listresto/:kindOf', function(req, res) {
    let type = req.params.kindOf
    let result = data.obj.filter(e => {
        e.kindOfRestaurant === type
    })
    res.send(result)

})