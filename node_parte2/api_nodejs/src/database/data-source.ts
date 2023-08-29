import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateCategories1693271310675 } from "./migrations/1693271310675-CreateCategories"
import { Category } from "../entities/Category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "db_partneships",
    synchronize: true,
    logging: false,
    entities: [Category],
    migrations: [CreateCategories1693271310675],
    subscribers: [],
})
