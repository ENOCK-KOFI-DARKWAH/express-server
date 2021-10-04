const express = require('express')
const app = express()

const products = [
    {
        id:1,
        name: 'iPhone 13 pro Max',
        category: 'Electronics',
        price: 9900,
        currency: 'USD',
        image: '',
        stars: 4,
        review: 'This is an amazing product'

    },

    
    {
        id:1,
        name: 'Butter bread',
        category: 'Food',
        price: 5,
        currency: 'USD',
        image: '',
        stars: 5,
        review: 'The best bread I have ever had'

    }

    
]

    const customers = [
        {
            id:1,
            name: 'Reagan KOfi Marfo',
            gender: 'Male'
        },

        {
            id:2,
            name: 'Joha Know',
            gender : 'Female'
        },

        {
            id:3,
            name: 'Kin Himan',
            gender : 'Male'
        }

    ]

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/products', (req, res) =>{
    res.json(products)

})

app.get('/customers', (req, res) =>{
    res.json(customers)
})

/*
app.get('/customers/:customerID', (req, res) =>{
    const {customerID} = req.params
    console.log('The customer ID is ', ${customerID})
    res.json(customers[customerID-1])
})
*/
app.listen(4000, () =>{
    console.log('Up and running')
})