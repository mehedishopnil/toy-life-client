import  { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import axios from 'axios';

const ShopByCategory = () => {
    const categories = ['math', 'science', 'engineering']; // Define your categories here
    const [activeCategory, setActiveCategory] = useState(categories[0]); // Set your initial active category here
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);


  useEffect(() => {
    // Fetch toy products data from your API
    axios.get(`/api/toyProductsData/${activeCategory}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [activeCategory]);
    
      // Handle tab click
      const handleTabClick = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
      };
    
      // Pagination
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
      // Render products
      const renderProducts = currentProducts.map((product) => (
        <div key={product.id} className="p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-32 h-32 mx-auto mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-yellow-400">Rating: {product.rating}</p>
            <button className="bg-primary text-white rounded-md px-4 py-2 mt-2">View Details</button>
          </div>
        </div>
      ));

    return (
        <div>
            <div className=''>
            <h2 className=' text-center text-5xl font-bold'>Shop By Category</h2>
            </div>

            <div>
            <div>
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab
              key={category}
              className={`${
                activeCategory === category ? 'bg-secondary text-white' : 'bg-primary text-gray-600'
              } px-4 py-2 cursor-pointer`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {renderProducts}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center">
              {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
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

        </div>
    );
};

export default ShopByCategory;