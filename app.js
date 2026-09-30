require("dotenv/config")
const express = require("express")
const app = express()

const userRouter = require("./routes/user.routes") 
const jobRouter = require("./routes/job.routes") 
const applicationRouter = require("./routes/application.routes") 
const loggedMiddleware = require("./middlewares/loggMiddleware") 

app.use(express.json())
app.use(loggMiddleware)

app.use("/user",userRouter)
app.use("/job",jobRouter)
app.use("/application",applicationRouter)


app.listen(8000,()=>console.log("Server is runnig at port 8000.")) 