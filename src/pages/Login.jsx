import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-lg p-10">
           <h1 className="font-semibold text-center">Login Your Account</h1>
         <form  className="card-body">
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
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="password"
               className="input input-bordered"
               required
             />
             
           </div>
           <div className="form-control mt-6">
             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded-lg transition duration-300">Login</button>
           </div>
         </form>
        
         <p className="text-center font-semibold">Do Not Have An Account? <Link className="text-red-500 " to = '/register'>Register</Link></p>
         <h1 className="flex items-center justify-center gap-3 mt-3 bg-blue-900 hover:bg-blue-700 text-white text-sm py-3 rounded-lg transition duration-300"><FaGoogle></FaGoogle> Sign In With Google</h1>
       </div>
       
       
      </div>
    );
};

export default Login;