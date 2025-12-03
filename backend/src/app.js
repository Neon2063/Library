import express from 'express'
import cors from "cors"
import cookieparser from 'cookie-parser'

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(cookieparser())
app.use(express.json({
    limit: "10kb"
}))
app.use(express.urlencoded({
    limit:"10kb",
    extended:true
}))


// router  logic
import Userrouter from './routes/user.routes.js';

// user register or login route
app.use('/api/v1/users',Userrouter)

// user books register or CRUD operation
import BookRouter from './routes/book.routes.js'
app.use('/api/v1/books',BookRouter)

// default routes
import router from './routes/user.routes.js';
app.use('/api/v1',router)




export default app;