function authentication(req,res,next) {
    if(!req.session || !req.session.Userinfo){
        const err = new Error('not pass')
    
    err.statusCode = 401;
    next(err)
    }
    next();
}
module.exports = authentication;