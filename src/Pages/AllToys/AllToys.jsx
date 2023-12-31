import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
  const { usersProduct } = useContext(AuthContext);
  console.log(usersProduct);
  return (
    <div className="container mx-auto my-10">
      <div className="py-5">
        <h1 className="text-4xl text-center font-bold">
          All Inputted Toys Data
        </h1>
      </div>

      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Toy Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Sub-category
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Available Quantity
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {usersProduct.map((toy, index) => (
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
                  <button className=" text-[#495b18] py-2 px-2 rounded bg-[#ddf89a] hover:text-indigo-900 hover:bg-[#d0f27b]">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
