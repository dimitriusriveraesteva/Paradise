function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">Have questions or want to book your stay? Reach out to us!</p>
      <form className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input type="text" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message:</span>
          <textarea name="message" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"></textarea>
        </label>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;