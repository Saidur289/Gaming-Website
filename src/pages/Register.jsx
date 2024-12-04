import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Register = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="min-h-screen flex justify-center items-center mt-5">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h1 className="font-semibold text-center">Register Now!</h1>
          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo-URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show? 'text': 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p onClick={() => setShow(!show)} className="absolute top-12 right-6">{show? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</p>
          
            </div>
            <div className="form-control mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded-lg transition duration-300">Register</button>
            </div>
          </form>
        
          <p className="p-3 text-center">Already Have an account? <Link className="text-red-500" to = '/login'>Login</Link></p>
          <h1  className="flex items-center justify-center gap-3 mt-3 bg-blue-900 hover:bg-blue-700 text-white text-sm py-3 rounded-lg transition duration-300"><FaGoogle></FaGoogle> Sign Up With Google</h1>
        </div>
      </div>
    );
};

export default Register;