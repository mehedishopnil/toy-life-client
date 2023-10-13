import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Gallery.css";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page (start from page 1)
  const imagesPerPage = 12; // Number of images to display per page
  const { galleryImage } = useContext(AuthContext);

  const allGalleryImages = galleryImage.map((imageData) => ({
    id: imageData._id,
    src: imageData.image,
    category: imageData.category,
  }));

  const filterImages = (category) => {
    if (category === "all") {
      return allGalleryImages;
    }
    return allGalleryImages.filter((image) => image.category === category);
  };

  const pageCount = Math.ceil(
    filterImages(selectedFilter).length / imagesPerPage
  );

  const generatePageNumbers = (totalPages) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChanges = (page) => {
    setCurrentPage(page);
  };

  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return filterImages(selectedFilter).slice(startIndex, endIndex);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset the current page when the filter changes
  }, [selectedFilter]);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-5xl pb-5 font-semibold text-gray-800">Gallery</h2>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`mx-2 px-4 py-2 rounded-full focus:outline-none ${
                selectedFilter === "all"
                  ? "bg-[#e73529] text-white"
                  : "text-[#94c120] border border-[#94c120]"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setSelectedFilter("Science")}
              className={`mx-2 px-4 py-2 rounded-full focus:outline-none ${
                selectedFilter === "Science"
                  ? "bg-[#e73529] text-white"
                  : "text-[#94c120] border border-[#94c120]"
              }`}
            >
              Science
            </button>

            <button
              onClick={() => setSelectedFilter("Math")}
              className={`mx-2 px-4 py-2 rounded-full focus:outline-none ${
                selectedFilter === "Math"
                  ? "bg-[#e73529] text-white"
                  : "text-[#94c120] border border-[#94c120]"
              }`}
            >
              Math
            </button>

            <button
              onClick={() => setSelectedFilter("Engineering")}
              className={`mx-2 px-4 py-2 rounded-full focus:outline-none ${
                selectedFilter === "Engineering"
                  ? "bg-[#e73529] text-white"
                  : "text-[#94c120] border border-[#94c120]"
              }`}
            >
              Engineering
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCurrentPageImages().map((image) => (
            <div key={image.id}>
              <div
                className="bg-white rounded-lg shadow-md cursor-pointer"
                onClick={() => openImageModal(image.src)}
              >
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {generatePageNumbers(pageCount).map((page) => (
            <button
              key={page}
              className="pagination-button"
              style={
                currentPage === page
                  ? { backgroundColor: "#94c120", color: "#fff" }
                  : { border: "1px solid #94c120", color: "#94c120", backgroundColor: "transparent" }
              }
              onClick={() => handlePageChanges(page)}
            >
              {page}
            </button>
          ))} 
        </div>
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="max-h-96 w-auto"
            />
            <button
              className="mt-4 bg-[#e73529] text-white px-4 py-2 rounded-full focus:outline-none"
              onClick={closeImageModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
