import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe

        const user = await usersRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email incorrect!");
        }

        //Verificar se senha está correta
        // Compare -> 123456 = $3432f3u2fi3oh42f424
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password incorrect!");
        }

        //Gerar Token
        const token = sign({
            email: user.email,
        }, "0cfa710f70584b8aea214c6b9d6ebd83", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }