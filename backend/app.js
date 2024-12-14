import express from 'express';
import routes from './src/routes';
import bodyParser from 'body-parser';
import session from 'express-session';;
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'
const dotenv = require('dotenv');
dotenv.config()
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.set('trust proxy', 1) // trust first proxy
// app.use('/static', express.static('public'));
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(cookieParser());
app.use(morgan('combined'))
app.use(session({
  secret: 'keyboardcat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      secure: false,
      httpOnly:false,
      maxAge:1000 * 60 * 30
    }
}))
// parse application/json

routes(app);

const port = process.env.API_PORT;
app.listen(port,()=>{
    console.log(`server is ready ${port}`);
})


