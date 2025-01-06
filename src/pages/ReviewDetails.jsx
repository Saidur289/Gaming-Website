import { useCallback, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ReviewDetails = () => {
  const {user} = useContext(AuthContext)
   
  const review = useLoaderData() || {};
  const { title, description, genre, year, photo, rating, name, email } = review;
  
  const handleWatchList = () => {
    const email = user.email
    const reviews = {title, description, genre, year, rating, email}
    fetch('http://localhost:5000/addWatchList', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviews)
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.insertedId){
        Swal.fire('Added To WatchList')
      }
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-purple-300 py-5 md:py-10">
  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Left: Game Photo */}
    <div className="w-full md:w-1/3">
      <img
        src={photo}
        alt={title}
        className="w-full md:h-[500px] object-cover rounded-lg"
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
      <div className="divider"></div>
      <p className="text-gray-700 mt-4">{description}</p>
      <div className="divider"></div>
      {/* Rating */}
      <div className="mt-4">
        <span className="inline-block bg-yellow-400 text-gray-800 text-sm font-bold px-4 py-2 rounded-full">
          Rating: {rating}/10
        </span>
      </div>

      {/* Name and Email */}
      <div className="mt-6">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
      </div>

      {/* Watchlist Button */}
      <div className="mt-6">
        <button onClick={handleWatchList} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Add to Watchlist
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ReviewDetails;
