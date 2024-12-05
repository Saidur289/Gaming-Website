import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyWatchList = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/addWatchList/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setReviews(data)
        })
    }, [email])
    return (
        <div className="w-11/12 mx-auto my-8">
     <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Game Title</th>
            <th>Publish Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {
            reviews.length === 0? <tr>
                <th>You do not add Reviews</th>
            </tr>: reviews.map((review, index) => <tr className="hover" key={index}>
            <th>{index + 1}</th>
            <td>{review?.title}</td>
            <td>{review?.year}</td>
            <td>{review?.rating}</td>
          </tr>)
          }
        
         
        </tbody>
      </table>
    </div>
   </div>
    );
};

export default MyWatchList;