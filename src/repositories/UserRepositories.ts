import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user"

@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export { UsersRepositories };