import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const[successful, setServices] = useState(true)
  const {createUser} = useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log({ name, email, password, photoURL });

    createUser(email, password, name, photoURL)
    .then((result)=>  {
      const user = result.user;
      console.log(user);

      if(user){
        alert('Congratulation: You are a Member of ToyLife');
        setServices(true);
        form.reset();
      }
    })
    .catch((error) => console.log(error));
  };


  return (
    <div>
      <div className=" hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center pb-8 ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md xl:w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="input your photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-[#94c120] hover:bg-[#82ab19]"
                  type="submit"
                  value="Sign Up"
                />
              </div>

              <div>
              <p>
                Already have an account?{" "}
                <Link to="/logIn" className="font-bold text-[#e73529]">
                  LogIn
                </Link>
              </p>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
