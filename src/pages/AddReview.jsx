import { useState } from "react";

const AddReview = () => {
    const [publishingYear, setYear] = useState('')
    const [rating, setRating] = useState('')
    const handleChange = e => {
        setYear(e.target.value)
    }
    const handleChangeRating = e => {
        setRating(e.target.value)
    }
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 p-24">
      <h1 className="text-3xl font-extrabold text-center mb-3">Add A Review</h1>
      <form>
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
            />
          </div>
        </div>
        {/* form row  Genre and  publishing year */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select className="input input-bordered " name="genre" id="day">
              <option value="sunday">Action</option>
              <option value="monday">Racing</option>
              <option value="tuesday">Adventure</option>
              <option value="wednesday">Fighting</option>
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
              min="2000"
              max="2500"
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
                name="name"
                className="input input-bordered w-full"
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
              name="description"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Now"
          className="btn bg-blue-950 text-white btn-block"
        />
      </form>
    </div>
  );
};

export default AddReview;
