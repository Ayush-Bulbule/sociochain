const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
<<<<<<< HEAD

const cors = require('cors')

=======
const jwt = require('jsonwebtoken')
>>>>>>> 7469ad017efbf8ae31623b915cee86a6e69e46bf
const User = require('./model/user')
const app = express()
const cors = require('cors')
const Post = require('./model/post')


require('dotenv').config()
app.use(express.json())
app.use(cors())

//Database connection
mongoose.connect(process.env.MONGO_ATLAS_URI,
    {
        dbName: "sociochain",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected")
    }).catch(err => {
        err ? console.log(`Error is ${err}`) : console.log("Database connected")
    })




//Api Routes ----------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Get All Users --------------------------------------------------------------------------
app.get("/api/all", async (req, res) => {
    const users = await User.find().then(users => {
        res.json({ "users": users })
    }).catch(err => {
        res.json({ "error": err })
    })


})

//signup ----------------------------------------------------------------------------------
app.post('/api/register', async (req, res) => {

    const { username, password, email, role, waddress } = req.body;
    console.log(username, password, email, role, waddress)

    if (!username || !password || !email || !waddress) {
        return res.status(400).json({ "message": "Please enter all fields" })
    }

    //check user already exists
    const isUserExists = await User.findOne({ email })
    console.log(isUserExists)

    if (isUserExists) {
        return res.status(400).json({ "message": "User already exists! Please Login!" })
    }

    const isUsernameTaken = await User.findOne({ username })
    console.log(isUsernameTaken)

    if (isUsernameTaken) {
        return res.status(400).json({ "message": "User Name not available!" })
    }

    const encPass = await bcrypt.hash(password, 10)

    const user = new User({
        username: username,
        password: encPass,
        email: email,
        role: role,
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

    try {

        if (!username || !password) {
            return res.status(400).json({ "message": "Please enter all fields" })
        }

        const user = await User.findOne({ username }).lean()


        //If user not present
        if (!user) {
            return res.status(400).json({ "message": "Invalid Credentials!" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        //check password
        if (isPasswordCorrect) {
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                process.env.JWT_SECRET,
            )
            console.log(bcrypt.compare(password, user.password))
            console.log(username)
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            return res.status(200).json({ "message": "Login Successfull!", "username": user.username, "token": token })
        }

        return res.status(400).json({ "error": "Invalid Credentials!" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ "error": "Internal Server Error" })
    }


})


// Save Post Data ----------------------------------------------------------------
app.post('/api/savepost', (req, res) => {
    const { id, likes, dislikes, comments, flags } = req.body;

    try {
        if (!id) {
            console.log("Id Not Present");
            return res.status(400).json({ "error": "Post Id is Required!" })
        }
        //if id is present 
        const post = new Post({
            id: id,
            likes: likes,
            dislikes: dislikes,
            flags: flags,
            comments: comments,

        });

        post.save().then(user => {
            res.status(200).json({ "message": "post saved!" })
        }).catch(errr => {
            res.satatus(400).json({ "error": err })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal Sever Error!" })
    }
})

//Server connection
const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})