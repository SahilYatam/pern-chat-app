import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma.js";
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
    userId: string;
}

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
      }
    }
  }
}

const protectedRoute = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized - no Token Provided",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    if (!decodedToken) {
        return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await prisma.user.findUnique({where: {id: decodedToken.userId}, select: {id: true, userName: true, fullName: true, profilePic: true} });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    next();

  } catch (error: any) {
    console.log("Error in verifyJWT middleware", error.message);
    res.status(500).json({
      error: "Internal server error in VerifyJWT middleware",
    });
  }
};

export default protectedRoute;
