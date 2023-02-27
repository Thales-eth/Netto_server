import { verifyToken } from "../utils/jwt.util"
import { JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

interface AuthenticatedRequest extends Request {
    user?: {
        id: string
        email: string
    }
}

const validateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {

    const { authorization } = req.headers

    if (authorization) {
        const token = authorization.substring(7)
        const { sub: id, email } = verifyToken(token) || {}
        req.user = { id, email }
    }

    else {
        res.sendStatus(401)
        return
    }

    next()
}

export default validateToken