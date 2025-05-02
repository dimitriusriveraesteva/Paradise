import { useState } from 'react';
import C2 from '../assets/C-2.JPG';
import C4 from '../assets/C-4.JPG';
import C05 from '../assets/C-05.JPG';
import C06 from '../assets/C-06.JPG';
import C07 from '../assets/C-07.JPG';
import C08 from '../assets/C-08.JPG';
import C09 from '../assets/C-09.JPG';
import C10 from '../assets/C-10.JPG';
import C11 from '../assets/C-11.JPG';
import C13 from '../assets/C-13.JPG';
import C15 from '../assets/C-15.JPG';
import C18 from '../assets/C-18.JPG';
import C19 from '../assets/C-19.JPG';
import C21 from '../assets/C-21.JPG';
import C22 from '../assets/C-22.JPG';
import C23 from '../assets/C-23.JPG';
import C25 from '../assets/C-25.jpg';

function HomePage() {
  const images = [C2, C4, C05, C06, C07, C08, C09, C10, C11, C13, C15, C18, C19, C21, C22, C23, C25];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="absolute top-4 left-4 flex space-x-4">
        <a href="/" className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Home</a>
        <a href="/contact" className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Contact Us</a>
      </div>
      <h1 className="text-5xl font-bold mb-6">Welcome to Paradise Luxe Homes</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Experience luxury and comfort in our exclusive short-term rental property. Escape to your tropical paradise today!
      </p>
      <div className="relative w-full max-w-3xl h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Property view ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 font-bold px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 font-bold px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#8250;
        </button>
      </div>
      <a href="/property" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 mt-8">
        View Property Details
      </a>
    </div>
  );
}

export default HomePage;