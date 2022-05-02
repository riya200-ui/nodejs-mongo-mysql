const express = require('express');
const app = express();

/*express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.*/
app.use(express.json());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan("dev"));

const mongoose = require('mongoose');

app.get('/',(req,res)=> {
    res.status(200).json('app is start')
})

const path = require('./src/routes/index')
app.use('/start',path)

//connect to mongodb database
//const URI = 'mongodb+srv://auth-11:auth@cluster0.hxsje.mongodb.net/leadgeneration?retryWrites=true&w=majority'
/*const URI = process.env.MONGODB_URL ?? ""
mongoose.connect(
    URI,

    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false
    },

    (err)=>{
        if(err) {
            console.log("successful connection with the server");
                }
         else{
            console.log("Error in the connectivity");
            }
        }
);*/

//connect  to database mysql

const dbConfig = require('./config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host :dbConfig.HOST,
    dialect:dbConfig.dialect,
    logging: true,
    operatorsAliases: false

})
sequelize.authenticate()
.then(()=> {
    console.log("db connected")
}).catch(()=> {
    console.log('db not connected')
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync()
.then(()=> {
    console.log('yes is sync')
}).catch(()=> {
    console.log('not sync')
})

const port = 8000;
app.listen(port ,()=> {
    console.log(`app is listening on ${port}`)
})