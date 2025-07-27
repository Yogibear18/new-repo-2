import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="overflow-hidden cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-w-4 aspect-h-3 relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <div className="relative h-full">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <p className="text-gray-200">{selectedImage.alt}</p>
              </div>
            </div>
            <div className="mt-2 text-white text-center">{selectedImage.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
