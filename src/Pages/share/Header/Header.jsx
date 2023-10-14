import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className=" bg-[#fef7e5] py-5">
      <div className="navbar container mx-auto md:px-8">
        <div className="navbar-start">
          <Link to='/'><a className=" normal-case text-4xl font-bold text-[#e73529]">
            <strong>Toy</strong><span className="text-[#94c120]">Life</span>
          </a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">
            <li>
              <a
                className={`text-lg font-bold hover:border-b-2 hover:border-[#94c120] hover:text-[#94c120] ${
                  location.pathname === "/" ? "text-[#94c120]" : "text-[#393f44]" // Change text color for active and inactive states
                }`}
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a
                className={`text-lg font-bold hover:border-b-2 hover:border-[#94c120] ${
                  location.pathname === "/blog"
                    ? "text-[#94c120]"
                    : "text-[#393f44]" // Change text color for active and inactive states
                }`}
              >
                <Link to="/blog">Blog</Link>
              </a>
            </li>


            <li>
              <a
                className={`text-lg font-bold hover:border-b-2 hover:border-[#94c120] ${
                  location.pathname === "/all-toys"
                    ? "text-[#94c120]"
                    : "text-[#393f44]" // Change text color for active and inactive states
                }`}
              >
                <Link to="/all-toys">All Toys</Link>
              </a>
            </li>


            <li>
              <a
                className={`text-lg font-bold hover:border-b-2 hover:border-[#94c120] ${
                  location.pathname === "/my-toys"
                    ? "text-[#94c120]"
                    : "text-[#393f44]" // Change text color for active and inactive states
                }`}
              >
                <Link to="/my-toys">My Toys</Link>
              </a>
            </li>


            <li>
              <a
                className={`text-lg font-bold hover:border-b-2 hover:border-[#94c120] ${
                  location.pathname === "/add-a-toy"
                    ? "text-[#94c120]"
                    : "text-[#393f44]" // Change text color for active and inactive states
                }`}
              >
                <Link to="/add-a-toy">Add a Toy</Link>
              </a>
            </li>

          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link to='/logIn'><a className="btn text-white bg-[#94c120] hover:bg-[#80a91a]">Log in</a></Link>
          <a className="btn text-white bg-[#94c120] hover:bg-[#80a91a]">SignUp</a>
        </div>
        <div>
            <h1>user image</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
