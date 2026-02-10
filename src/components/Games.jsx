import { Link } from "react-router-dom";

const Games = ({ review }) => {
  const { title, description, genre, year, photo, rating, _id } = review;

  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={photo}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">
            {description.length > 70 ? description.substring(0, 70) + "..." : description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {genre}
          </span>
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Rating: {rating}/10
          </span>
          <span className="bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Year: {year}
          </span>
        </div>

        {/* Button */}
        <div className="mt-6">
          <Link to={`/review/${_id}`}>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
