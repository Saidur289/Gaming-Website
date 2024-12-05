import { useLoaderData } from "react-router-dom";
import Games from "../components/Games";
import { useState } from "react";

const AllReview = () => {
  const loadedReview = useLoaderData() || [];
  const [reviews, setReviews] = useState(loadedReview)
  // create function for filter data
  const handleFilterByGenres = genre => {
    fetch(`http://localhost:5000/allReviews?genre=${genre}`)
    .then((res) => res.json())
    .then((data) => {
      setReviews(data)
      
    })
    .catch((error) => {
      console.log('error', error);
    })
  }
  const handleSortByRating = rating => {
    fetch(`http://localhost:5000/allReviews?sort=${rating}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setReviews(data)
    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="flex justify-center items-center gap-3 py-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
            Sort By 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSortByRating('desc')}>Sort By Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortByRating('asc')}>Sort By Year</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
            Filer by Genres
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleFilterByGenres('Action')}>Action</a>
            </li>
            <li>
              <a onClick={() => handleFilterByGenres('Racing')}>Racing</a>
            </li>
            <li>
              <a onClick={() => handleFilterByGenres('Adventure')}>Adventure</a>
            </li>
            <li>
              <a onClick={() => handleFilterByGenres('Fighting')}>Fighting</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 lg:p-8">
        {Array.isArray(reviews) &&
          reviews.map((review, index) => (
            <Games to review={review} key={index}></Games>
          ))}
      </div>
    </div>
  );
};

export default AllReview;
