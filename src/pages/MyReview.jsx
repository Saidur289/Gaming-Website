import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://chill-gamer-server-rose-nine.vercel.app/myReview/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [email]);
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`https://chill-gamer-server-rose-nine.vercel.app/myReview/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount>0){
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
            const remaining = reviews.filter((review) => review._id !== id)
            setReviews(remaining)
        })
        }
      });
     

  }

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
            <th>Action</th>
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
            <td>
                <button onClick={() => handleDelete(review._id)} className="btn"><FaTrash></FaTrash></button>
                <Link to ={`/updateReview/${review._id}`}><button className="btn"><FaEdit></FaEdit></button></Link>
            </td>
          </tr>)
          }
        
         
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default MyReview;
