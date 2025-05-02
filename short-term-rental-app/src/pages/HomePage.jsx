import Navbar from './Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="relative flex items-center justify-center h-screen bg-gray-800 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Paradise Luxe Homes</h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
              Your private tropical escape with luxurious amenities and unforgettable comfort.
            </p>
            <div className="space-x-4">
              <a href="/property" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">View Details</a>
              <a href="https://booking.hospitable.com/widget/fd7f5f40-7ea7-460f-869c-9f830039b194/1261776" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">Book Now</a>
            </div>
          </div>
        </section>
        <section id="features" className="bg-gray-100 py-12">
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