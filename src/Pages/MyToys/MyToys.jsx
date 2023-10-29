import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const MyToys = () => {
  const { user, usersProduct, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [fromLocation, setFromLocation] = useState(location.state?.fromLocation);

  let userEmail;
  let myAllProducts = [];

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!fromLocation) {
      setFromLocation(location.state?.form?.pathname || '/');
    }
  }, [location.state?.from, location, user, navigate, fromLocation]);

  // Check if user and email property exist before logging
  if (user && user.email) {
    userEmail = user.email;  // Set userEmail here
  } else {
    console.log("User email is not available yet.");
  }

  // Check if usersProduct is an array and not empty
  if (Array.isArray(usersProduct) && usersProduct.length > 0) {
    // Filter the products with matching email
    myAllProducts = usersProduct.filter((product) => product.email === userEmail);
  } else {
    console.log("User products data is not available yet.");
  }

  return (
    <div className="container mx-auto my-8">
      <div>
        <h1 className=" text-4xl font-bold text-center">All of my Toys</h1>
      </div>

      <div>
        <div className="container mx-auto my-10">
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              {/* ... (table header code) */}
              <tbody className="bg-white divide-y divide-gray-200">
                {myAllProducts.map((toy, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <img className="w-20" src={toy.photoURL || "N/A"} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {toy.displayName || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">{toy.name}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{toy.email}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{toy.category}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{toy.price}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{toy.quantity}</td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
