// const jwt = require('jsonwebtoken')
import jwt, { JwtPayload } from "jsonwebtoken"

export const signJwt = (userId: string | undefined, email: string | undefined) => {
    return jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '2d', subject: userId })
}

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, process.env.TOKEN_SECRET) as JwtPayload
}
