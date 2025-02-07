import { Request, Response } from "express";

const sendMessage = (req:Request, res:Response) => {
    res.send("signup");
}

export {sendMessage};