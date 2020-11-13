const jwt = require("jsonwebtoken");
const Config = require("../../Config");


const TokenVerification = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(404).send({ status: 404, message: "No token provided!" });
    }
    jwt.verify(token, Config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ status: 401, message: "Token Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = { TokenVerification: TokenVerification };