import "reflect-metadata"
import express from "express"
import { AppDataSource } from "./database/data-source"
import cors from "cors"
import { router } from "./routes"
import "./shared/container"
const app = express()
app.use(router)
app.use(cors())
app.use(express.json())

AppDataSource.initialize().then(async () => {
console.log("Database connected")
app.listen(3333, () => {
    console.log("Server running on port 3333")
})
}).catch(error => console.log(error))


