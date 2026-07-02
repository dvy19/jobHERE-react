
function Login(){

    const[userData, setUserData]=useState({
        email:"",
        password:""
    }); 

    const handleChange=(e)=>{

        setUserData(
            {
                ...userData,
                [e.target.name]:e.target.value
            }
        )
    }


    const handleSubmit=async(e)=>{

        e.preventDefault();  // do not refresh the page on form submission

       try{
         const response=await authService.Login(userdata);

        console.log("Login Successful",response)
       }
       catch(error){
        console.error("Login Failed",error)
       }
    }


    return (
        <>
        
         <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <button type="submit">
                Register
            </button>
        </form>
        </>
    )

}

export default Login;