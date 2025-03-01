import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName;
  const email = user?.email;
  const [publishingYear, setYear] = useState(2010);
  const [rating, setRating] = useState(5);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value >= 2010 && value <= 2030) {
      setYear(value);
    }
  };
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };
  // function for add review 
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const genre = form.genre.value;
    const year = publishingYear;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const review = { title, description, genre, year, photo, rating, name, email };
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review)
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if(data.insertedId){
        Swal.fire('Review added successfully')
      }
    })

    // console.log(review);
  };
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 p-24">
      <h1 className="text-3xl font-extrabold text-center mb-3">Add A Review</h1>
      <form onSubmit={handleAddReview}>
        {/* form row title and description  */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Game Title"
                name="title"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Game Description"
              name="description"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form row  Genre and  publishing year */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Genres</span>
            </label>
            <select className="input input-bordered " name="genre" id="day">
              <option value="Action">Action</option>
              <option value="Racing">Racing</option>
              <option value="Adventure">Adventure</option>
              <option value="Fighting">Fighting</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Publishing Year</span>
            </label>
            <input
              type="number"
              id="publishingYear"
              name="publishingYear"
              placeholder="e.g., 2024"
              min="2010"
              max="2030"
              value={publishingYear}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form row  photo and  rating */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Game Cover</span>
            </label>
            <input
              type="text"
              placeholder="Game Cover Pic"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              id="publishingYear"
              name="rating"
              placeholder="Game Rating"
              min="1"
              max="10"
              value={rating}
              onChange={handleChangeRating}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form row user name and user email */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Game Title"
                 defaultValue={name}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Game Description"
              defaultValue={email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Review"
          className="btn bg-blue-950 text-white btn-block"
        />
      </form>
    </div>
  );
};

export default AddReview;
