import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [successful, setSuccessful] =useState(false);
  const { signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});
    signIn(email, password) 
    .then((result)=> {
      const user = result.user;
      console.log(user);

      if(user){

        setSuccessful(true);
        // setTimeout(()=>{
        //   setSuccessful(false);
        // },5000)
        alert("Successfully Logged In")
        navigate(from, {replace: true});
      }
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center pb-8 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md xl:w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn text-white bg-[#94c120] hover:bg-[#8bb81a]" type="submit" value='LogIn' />
              </div>
              <div>
                <p>haven't account? <Link to='/signUp' className="font-bold text-[#e73529]">Register</Link></p>
              </div>
              <div>
                {
                  successful ? (<p className="text-center text-[#94c120]">Successfully Logged In</p>): null
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
