import logo from '../assets/images/Email capture-amico.png'
const Contact = () => {
  return (
    <div className="py-5 md:py-10 bg-gradient-to-r from-blue-200 to-purple-300 px-5">
      <div className='md:flex md:items-center md:gap-3'>
        <div className="card bg-gradient-to-r from-blue-400 to-purple-500  md:w-1/2 shrink-0 shadow-2xl">
        <h1 className="text-4xl text-center py-3 pt-5">Contact Us</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-3xl py-8"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered rounded-3xl py-8"
                required
              />
        
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white rounded-3xl ">Your Message</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Massage"></textarea>
        
            </div>
            <button className="bg-gradient-to-r from-blue-700 to-purple-800 mt-3 px-6 py-4 rounded-lg text-white w-full">Send Massage</button>
          </form>
        </div>
        <div>
            <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
