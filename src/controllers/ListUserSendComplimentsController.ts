import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import { Request, Response } from "express";


class ListUserSendComplimentsController {

    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id)

        return res.json(compliments)
    }
}

export { ListUserSendComplimentsController }