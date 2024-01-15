require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")

const birthdayRoutes = require("./routes/birthdays")

const app = express();

// middleware
app.use(express.json())

app.use((req, res, next)=>{
console.log(req.path, req.method)
    next()
})
// possible routes
app.use("/api/birthdays",birthdayRoutes)

// connect db
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
    }).then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('server is running on port ' + process.env.PORT );
        })
        
    }).catch((err)=>{
    console.log(err)
})



// listening 
