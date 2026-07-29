export async function logger(req, res, next){
    console.log(req.method, req.url);
    
    next()
}

export async function errorHandeling(error, req, res, next){

     res.status(error.statusCode || 500).json({message: error.message||  "something went wrong"})
}