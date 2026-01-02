export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          This is the home page. Note: Using h2 instead of h1 due to
          compatibility issue.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            About This Site
          </h2>
          <p className="text-gray-600">
            Portfolio website built with Next.js 16 and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
