import { Link } from "react-router-dom";
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaPaypal, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#0d1625]">
      <div className="container mx-auto grid grid-cols-3 py-5 ">
        <div className="">
          <Link to="/">
            <a className=" normal-case text-4xl font-bold text-[#e73529]">
              <strong>Toy</strong>
              <span className="text-[#94c120]">Life</span>
            </a>
          </Link>

          <p className="text-gray-300 font-light py-2 w-2/4">
            Educational toys are more than just playthings; they are powerful
            tools that ignite a child's curiosity and foster essential skills.
            Discover the magic of learning through playtime with our educational
            toy collection.
          </p>
        </div>

        <div className=" text-white">
          <h1 className="text-white text-xl font-bold pb-5">Useful Links</h1>
          <div className=" font-semibold text-gray-400 space-y-3">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/blog">Blog</Link>
            </p>
            <p>
              <Link to="/all-toys">All Toys</Link>
            </p>
            <p>
              <Link to="/my-toys">My Toys</Link>
            </p>
          </div>
        </div>

        <div className=" text-white">
            <h1 className="text-xl font-bold pb-5">Follow Us</h1>
            <div className="flex gap-3">
                <a className="text-3xl" href=""><FaFacebook></FaFacebook></a>
                <a className="text-3xl" href=""><FaInstagram></FaInstagram></a>
                <a className="text-3xl" href=""><FaTwitter></FaTwitter></a>
                <a className="text-3xl" href=""><FaLinkedin></FaLinkedin></a>
                <a className="text-3xl" href=""><FaYoutube></FaYoutube></a>
            </div>

            <h1 className="text-xl font-bold pt-8 pb-5">Payment Method</h1>

            <div className="flex">
            <a className="text-4xl" href=""><FaPaypal></FaPaypal></a>
            <img className="w-1/4 -mt-5" src="https://mybrokerstar.com/images/payments/Skrill_image_2.png" alt=""/>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
