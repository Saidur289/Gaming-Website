import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const FeedBack = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/reviews.json')
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])
    return (
        <div className=" bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col justify-center items-center pb-10">
            <h1 className="text-2xl font-bold text-center pt-4  pb-2">Customer Reviews & Ratings</h1>
            <p className="text-black font-semibold w-3/5 mx-auto text-center pb-5 py-3 ">Browse through our collection of customer reviews and see why so many people love what we offer! Honest feedback, real experiences.</p>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {
                reviews.map((review) => <ReviewCard key={review.name} review ={review}></ReviewCard>)
            }
          </div>
          </div>
    );
};

export default FeedBack;