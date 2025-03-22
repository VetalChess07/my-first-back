import express from "express"

const app = express()

const port = process.env.POR || 5000

app.use(express.json())

app.listen(port , () => console.log('work' + port))

export {app}