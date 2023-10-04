import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto">
      <div className="navbar bg-[#fef7e5]">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-3xl font-bold text-[#e73529]">
            Toy<span className="text-[#94c120]">Life</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">
            <li>
              <a
                className={`text-xl hover:border-b-2 hover:border-[#94c120] hover:text-[#94c120] ${
                  location.pathname === '/' ? 'text-[#94c120]' : 'text-[#000]' // Change text color for active and inactive states
                }`}
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a
                className={`text-xl hover:border-b-2 hover:border-[#94c120] ${
                  location.pathname === '/blog' ? 'text-[#94c120]' : 'text-[#000]' // Change text color for active and inactive states
                }`}
              >
                <Link to="/blog">Blog</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <a className="btn text">Log in</a>
          <a className="btn">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
