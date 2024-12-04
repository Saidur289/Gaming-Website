import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const review = useLoaderData() || {};
  const { title, description, genre, year, photo, rating } = review;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left: Game Photo */}
        <div className="w-full md:w-1/3">
          <img
            src={photo}
            alt={title}
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>

        {/* Right: Game Content */}
        <div className="w-full md:w-2/3">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

          {/* Genre and Year */}
          <p className="text-gray-600 text-sm mt-2">
            <span className="font-semibold">Genre:</span> {genre} |{" "}
            <span className="font-semibold">Year:</span> {year}
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">{description}</p>

          {/* Rating */}
          <div className="mt-4">
            <span className="inline-block bg-yellow-400 text-gray-800 text-sm font-bold px-4 py-2 rounded-full">
              Rating: {rating}/10
            </span>
          </div>

          {/* Watchlist Button */}
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
