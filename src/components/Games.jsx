import { Link } from "react-router-dom";

const Games = ({review}) => {
  // destructure
  const { title, description, genre, year, photo, rating, _id } = review
    
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt={title}
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {genre}
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Rating: {rating}/10
          </span>
          <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Year: {year}
          </span>
        </div>
        <div className="px-6 py-4">
         <Link to = {`/review/${_id}`}> <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Explore Details
          </button></Link>
        </div>
      </div>
    );
  };
  
  export default Games;
  