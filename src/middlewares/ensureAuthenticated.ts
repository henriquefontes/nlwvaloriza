import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {

    // Receber Token
    const authToken = req.headers.authorization

    // Validar se token está preenchido
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");



    try {
        // Validar se token é válido
        const { sub } = verify(token, "0cfa710f70584b8aea214c6b9d6ebd83") as IPayload;

        // Recuperar informações do usuário
        req.user_id = sub

        return next();
    } catch (err) {
        return res.status(401).end()
    }






}