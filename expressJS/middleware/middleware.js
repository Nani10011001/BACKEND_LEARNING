function middleware(req,res,next){
    console.log("user data is coming ");
    console.log("credential is valid")
    console.log("request granted")
    next()
}
export default middleware