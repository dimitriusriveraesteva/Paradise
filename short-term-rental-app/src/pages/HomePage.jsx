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
      <p className="text-lg mb-4 text-center max-w-2xl">
        Escape to this beautifully renovated coastal retreat—just 10 minutes from Caspersen and Venice Beach, and only 30 minutes from world-famous Siesta Key Beach! Explore Shamrock Park’s trails, golf, bike, or fish with gear and bikes provided. Unwind at home with a fully stocked kitchen and grill, or discover Venice’s boutiques, galleries, and theaters. State parks and Sarasota gems like the Ringling Museum and Mote Aquarium are a short drive away. Beach gear and towels included!
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>Main Features:</strong> Private backyard, smart TV w/ streaming services, beach chairs/towels/umbrella, beach wagon, fishing rods, shark tooth hunting gear, bicycles, ceiling fans, walk-in closets, dining table.
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>Kitchen:</strong> Dishwasher, refrigerator, stove/oven, microwave, toaster, cookware, dual coffee maker, blender, ice maker, water filter, trash bags + paper towels, complimentary spices, garbage disposal.
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>General:</strong> Free Wi-Fi, iron board, linens/towels, complimentary toiletries (shampoo, conditioner, body soap, lotion, hand soap, etc.), laundry detergent, hair dryer, hangers, keyless entry.
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>Parking:</strong> 1 car garage with space for up to 2 additional vehicles in driveway.
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>FAQ:</strong> 1 exterior facing camera (facing out).
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>Bedrooms:</strong>
        <ul className="list-disc list-inside">
          <li>Bedroom 1: King Bed</li>
          <li>Bedroom 2: Queen Bed</li>
          <li>Bonus Room/Sunroom: Full Sleeper Sofa</li>
          <li>Living Room: Queen Sleeper Sofa</li>
        </ul>
      </p>
      <p className="text-lg mb-4 text-center max-w-2xl">
        <strong>Additional Info:</strong> Washer & Dryer, Central A/C, Outdoor BBQ Grill, Close to Golf Courses, Beaches & Shamrock Park & Nature Center. <strong>SMOKE FREE HOUSE</strong>
      </p>
      <div className="relative w-full max-w-xl h-48 overflow-hidden rounded-lg shadow-lg">
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
      <div className="w-full max-w-4xl mt-8 flex justify-center">
        <iframe
          id="booking-iframe"
          sandbox="allow-top-navigation allow-scripts allow-same-origin"
          style={{ width: '100%', height: '900px' }}
          frameBorder="0"
          src="https://booking.hospitable.com/widget/fd7f5f40-7ea7-460f-869c-9f830039b194/1261776"
        ></iframe>
      </div>
    </div>
  );
}

export default HomePage;