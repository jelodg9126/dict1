import Input from "../Components/Input"




function Login(){



    return(
        <>
           <div className="login-card p-3 border">
             <Input label="Username"/>
             <Input label="Password" type="password"/>
              <button className="btn btn-wide">Submit</button>
           </div>
        </>
    )
}

export default Login