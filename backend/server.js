const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const cors = require('cors')

const User = require('./model/user')
const app = express()

app.use(express.json())
app.use(cors())


//Database connection
mongoose.connect('mongodb+srv://ayushbulbule24:IwXN64MhYG1YckhX@cluster0.etqgjcy.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected")
    }).catch(err => {
        console.log(`Error is ${err}`)
    })




//Request to the server
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Get All Users ----------------------------------------------------------------------------------
app.get("/api/all", async (req, res) => {
    const users = await User.find().then(users => {
        res.json({ "users": users })
    }).catch(err => {
        res.json({ "error": err })
    })


})

//Register ----------------------------------------------------------------------------------
app.post('/api/register', async (req, res) => {

    const { username, password, email, waddress } = req.body;
    console.log(username, password, email, waddress)

    if (!username || !password || !email || !waddress) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    //check user already exists
    const isUserExists = await User.findOne({ email })
    console.log(isUserExists)

    if (isUserExists) {
        return res.status(400).json({ "message": "User already exists! Please Login!" })
    }

    const encPass = await bcrypt.hash(password, 10)

    const user = new User({
        username: username,
        password: encPass,
        email: email,
        waddress: waddress
    })

    user.save().then(user => {
        res.status(200).json({ "user": user.username })
    }).catch(err => {
        res.status(400).json({ "error": `Error is ${err}` })
    })
});



// login ----------------------------------------------------------------------------------
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    const user = await User.findOne({ username }).lean()


    //If user not present
    if (!user) {
        return res.status(400).json({ "message": "Invalid Email!" })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    //check password
    if (isPasswordCorrect) {
        console.log(bcrypt.compare(password, user.password))
        console.log(username)
        return res.status(200).json({ "message": "Login Successfull!", "username": user.username, "password": user.password })
    }

    return res.status(400).json({ "error": "Invalid Credentials!" })



})


//Server connection
const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})