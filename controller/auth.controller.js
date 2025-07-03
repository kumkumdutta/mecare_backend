import { User } from "../model/user.model.js"
import * as utils from "../utils/utils.js"


const login = async (req, res) => {
    try {
        let { email , password } = req.body
        const user = await User.findOne({ email })
        if(!user){
            res.status(400).send("user not found")
        }
        let compare = await utils.comparePassword(password, user.password)
        if(!compare){
            res.status(400).send("wrong password")
        }
        let token = utils.generateToken(user)
        res.status(200).send({msg:"login successfully!!",token})

       } catch (error) {
        res.status(400).send(error)
    }

}

const register = async (req, res) => {
    try {
        let { user_name, email, password, role } = req.body
        let user = await User.findOne({ email })
        if (user) {
            res.status(400).send("email already exist")
        } else {
            let profile_obj = {
                user_name, email , role
            }
            const mypassword = await utils.hashPassword(password)
            profile_obj.password = mypassword
            const create_user = new User(profile_obj)
            await create_user.save()
            res.status(201).send("user created successfully")
        }

    } catch (error) {
        res.status(400).send(error)
    }
}

export { login , register }