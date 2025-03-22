import type {Express} from "express"

import { DEFAULT_ROUTE_API } from "./defaultRoute.js"

import usersRouter from "./users/usersRoutes.js"
import { defaultRoutes } from "./default/defaultRoutes.js";

export default function setupRoutes(app:Express){
    app.get(`${DEFAULT_ROUTE_API}`, defaultRoutes);
    app.use(`${DEFAULT_ROUTE_API}`,usersRouter)
}