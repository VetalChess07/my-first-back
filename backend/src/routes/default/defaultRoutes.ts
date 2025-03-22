import {Request, Response } from "express";
import { DEFAULT_ROUTE_API } from "../defaultRoute.js";

export const defaultRoutes = async (_: Request, res: Response) => {
  res.status(200).json({
            message: "Welcome to the API. Here are your available endpoints.",
            users: `${DEFAULT_ROUTE_API}/users`, 
          });
};
