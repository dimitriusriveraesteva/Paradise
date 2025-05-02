function PropertyDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Property Details</h1>
      <p className="text-lg mb-6">Discover the features and amenities of our luxurious rental property.</p>
      <ul className="list-disc list-inside mb-6">
        <li>3 Bedrooms</li>
        <li>2 Bathrooms</li>
        <li>Private Pool</li>
        <li>Fully Equipped Kitchen</li>
      </ul>
      <a href="/contact" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">Contact Us</a>
    </div>
  );
}

export default PropertyDetails;