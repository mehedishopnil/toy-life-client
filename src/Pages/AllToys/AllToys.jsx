import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AllToys = () => {
    const {usersProduct} = useContext(AuthContext)
    return (
        <div className='container mx-auto'>
            <div>

            </div>

            <div>
            <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Seller
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Toy Name
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
              {toy.seller || 'N/A'}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {toy.toyName}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {toy.subCategory}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {toy.price}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {toy.availableQuantity}
            </td>
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
    );
};

export default AllToys;