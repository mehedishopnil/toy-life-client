import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className=" ">
          <div className="text-center pb-8 ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="  shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
