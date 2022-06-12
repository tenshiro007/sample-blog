const express=require('express')
require('dotenv').config()
const userRouter=require('./routers/user')

const app=express()
app.use(express.json())
app.use('/',userRouter)

const port=process.env.PORT||8000
app.listen(port, () => {
    console.log(`server run at port ${port}`);
})
