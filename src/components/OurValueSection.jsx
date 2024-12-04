const OurValueSection = () => {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Our Value</h3>
          <h1 className="text-3xl font-bold mt-2">
            Gaming is our passion. We create fun games that you’ll love.
          </h1>
          <p className="mt-4 text-white/80">
            With a commitment to innovation and fun, we aim to deliver engaging gaming experiences. Join us on our mission to revolutionize gaming.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 max-w-6xl mx-auto">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-xl font-bold">Vision</h3>
            <p className="mt-2 text-gray-600">
              To redefine gaming experiences with innovation and creativity.
            </p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="mt-2 text-gray-600">
              To craft games that inspire, entertain, and connect players globally.
            </p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-yellow-600 text-4xl mb-4">
              <i className="fas fa-quote-right"></i>
            </div>
            <h3 className="text-xl font-bold">Motto</h3>
            <p className="mt-2 text-gray-600">
              Fun, innovation, and creativity drive everything we do.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurValueSection;
  