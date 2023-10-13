import { useContext, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AuthContext } from '../../../providers/AuthProvider';

const ShopByCategory = () => {
  const { productsData } = useContext(AuthContext);
  const categories = ['Math', 'Science', 'Engineering'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const handleTabClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = productsData.filter((product) => product.category === activeCategory);
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="py-8">
        <h2 className="text-center text-5xl font-bold">Shop By Category</h2>
      </div>

      <div className="bg-primary py-4 px-4 space-x-8">
        <Tabs>
          <TabList className="flex justify-center py-5 gap-8">
            {categories.map((category) => (
              <Tab
                key={category}
                className={`${
                  activeCategory === category ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'
                } px-4 py-2 cursor-pointer rounded-full`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                    <h2 className="text-xl font-semibold mt-4">{product.product_name}</h2>
                    <p className="text-white text-lg mt-2">${product.price}</p>
                    <p className="text-yellow-400">Rating: {product.rating}</p>
                    <button className="bg-secondary text-white rounded-md px-4 py-2 mt-2">View Details</button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    className={`mx-2 px-4 py-2 rounded-md ${
                      currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-primary text-gray-600'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
