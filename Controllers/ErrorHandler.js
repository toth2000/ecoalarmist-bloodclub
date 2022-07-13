const CustomError=class {
    constructor(status,message){
        this.message=message;
        this.status=status;
    }
}

const errorHandler = (err, req, res, next) => {
    if(res.headersSent){
        return next();
    }
    
    if(err instanceof CustomError){
        console.log(err.message);
        return res.status(err.status500).json(err.message || 'Unknown Error');
    }else{
        console.log(err);
        return res.status(500).json('Unknown Error');
    }
}
module.exports = { errorHandler, CustomError };