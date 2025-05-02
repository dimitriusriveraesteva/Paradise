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
    <>
      <header className="w-full bg-white shadow-md fixed top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Paradise Luxe Homes</div>
          <div className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/property" className="text-gray-700 hover:text-blue-600">Property Details</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          </div>
        </nav>
      </header>
      <div className="pt-16">
        <div
          className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center px-4"
          style={{ backgroundImage: 'url(../assets/C-2.JPG)' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
            Welcome to Paradise Luxe Homes
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Experience luxury and comfort in our exclusive short-term rental property. Escape to your tropical paradise today!
          </p>
          <div className="flex space-x-4">
            <a
              href="/property"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              View Property Details
            </a>
            <a
              href="https://booking.hospitable.com/widget/fd7f5f40-7ea7-460f-869c-9f830039b194/1261776"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
          <div className="relative w-full max-w-2xl h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Property view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 font-bold px-3 py-2 rounded-full shadow-md hover:bg-gray-200"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 font-bold px-3 py-2 rounded-full shadow-md hover:bg-gray-200"
            >
              &#8250;
            </button>
          </div>
        </div>
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Property Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Main Features</h3>
                <p>Private backyard, smart TV w/ streaming services, beach chairs/towels/umbrella, beach wagon, fishing rods, shark tooth hunting gear, bicycles, ceiling fans, walk-in closets, dining table.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Kitchen</h3>
                <p>Dishwasher, refrigerator, stove/oven, microwave, toaster, cookware, dual coffee maker, blender, ice maker, water filter, trash bags + paper towels, complimentary spices, garbage disposal.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">General</h3>
                <p>Free Wi-Fi, iron board, linens/towels, complimentary toiletries, laundry detergent, hair dryer, hangers, keyless entry.</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p>&copy; 2025 Paradise Luxe Homes. All rights reserved.</p>
            <p>Follow us on <a href="#" className="text-blue-400 hover:underline">Instagram</a> and <a href="#" className="text-blue-400 hover:underline">Facebook</a>.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;