import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction, response } from "express";
import cors from 'cors';
import morgan from 'morgan';

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).send({ error: err.message })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.listen(3000, () => console.log("Server is running"))


/* Flowch
*
* Server -> Middleware -> Routes -> Controller -> Service ( <- throw new Error )
*
*/