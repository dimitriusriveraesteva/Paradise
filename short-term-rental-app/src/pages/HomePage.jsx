function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Paradise Luxe Homes</h1>
      <p className="text-lg mb-6">Experience luxury and comfort in our exclusive short-term rental property.</p>
      <a href="/property" className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">View Property Details</a>
    </div>
  );
}

export default HomePage;