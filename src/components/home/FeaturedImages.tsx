import React from 'react';

const FeaturedImages = ({ images }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-shrine-primary text-center mb-6">
          Featured Images
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <img
                src={image.url}
                alt={image.title || `Featured Image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {image.title && (
                  <h3 className="text-lg font-semibold text-shrine-dark">
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
