import bcrypt from "bcryptjs";
import User from "../../../models/User";
import { signToken } from "../../../utils/auth";
import db from "../../../utils/db";

export default async function handler(req, res) {
    await db.connect();
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
    });
    const user = await newUser.save()
    await db.disconnect()

    const token = signToken(user)
    res.send({
        token,
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    })
}

