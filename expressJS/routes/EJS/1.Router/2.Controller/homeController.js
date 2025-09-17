const homePage=(req,res)=>{
    const user={
        name:"John Doe",
        age:30,
        email:"john.doe@example.com"
    }
    res.render("home.ejs", { user })
}
export { homePage }