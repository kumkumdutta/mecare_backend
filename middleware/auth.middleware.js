import jwt from "jsonwebtoken";
import env from "dotenv";
env.config()

const authenticate = async (req, res, ) => {
    try {

       let secret = process.env.SECRET_KEY;
        
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return reply.status(401).send({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(token,secret);
       
        req.user = decoded;
        
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
};

export {
    authenticate
}