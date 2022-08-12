

// function is authorized check authorization in the request header
function isAuthorized(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader === "apikey AHES6ZRVmB7fkLtd1") {
        next();
    }
    else {
        res.status(401).json({
            error: "Unauthorized"
        });
    }
}


module.exports = isAuthorized;
