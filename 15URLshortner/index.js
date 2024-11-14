const express = require('express');
const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');
const path = require('path');
const home = path.resolve("./views/home");
const staticRoute = require('./routes/staticRouter')
const cookieParser = require('cookie-parser');
const { restrictToLoggedinUserOnly } = require('./middlewares/auth');

// conecction of mongodb
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log("mongoDb connected!"))
    .catch((err) => console.log("Error: ", err));

const app = express();
const PORT = 8001;

app.set('view engine', 'ejs'); // it means i want to use view engine ejs for server side rendering
app.set('views', path.resolve('./views'));


// middleware so that it can parse the data easily.
app.use(express.json()); // json data is also supported
app.use(express.urlencoded({extended: false})); //form data ko bhi parse karenge
app.use(cookieParser()); // now we can use cookie pareser for noe


app.use('/url', restrictToLoggedinUserOnly, urlRoute);
app.use('/', staticRoute);
app.use('/user',userRoute);

app.get('/short-urls', async (req, res) => {// we have total of ejs, pub and handlers for server side rendering
    const allURls = await URL.find({});
    // return res.end(`
    //     <html>
    //     <head><title> URL shortner </title> </head>
    //     <body>
    //         <ol>
    //             ${allURls.map((url) => `<li> ${url.shortId} - ${url.redirectURL} - ${url.visitHistory.length}</li>`).join("")}
    //         </ol>
    //     </body>
    //     </html>
    //     `);
    return res.render('history',{
        urls: allURls,
    });
});



app.listen(PORT, () => console.log("Server Started!"));