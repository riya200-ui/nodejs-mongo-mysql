const express = require('express');
const app = express();

/*express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.*/
app.use(express.json());

app.get('/',(req,res)=> {
    res.status(200).json('app is start')
})

const port = 8000;
app.listen(port ,()=> {
    console.log(`app is listening on ${port}`)
})