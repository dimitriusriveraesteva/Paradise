function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Paradise Luxe Homes</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Experience luxury and comfort in our exclusive short-term rental property. Escape to your tropical paradise today!
      </p>
      <a href="/property" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
        View Property Details
      </a>
    </div>
  );
}

export default HomePage;