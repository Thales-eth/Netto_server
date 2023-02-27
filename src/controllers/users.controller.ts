import { Request, Response } from "express";
import User from '../models/User.model'

export const getUsers = (_req: Request, res: Response): void => {
    User
        .find()
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err))
};

export const getOneUser = (req: Request, res: Response): void => {

}

