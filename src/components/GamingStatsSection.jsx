import { Fade } from "react-awesome-reveal";
const GamingStatsSection = () => {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">
            Playkits by Number
          </h2>
          <Fade>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Welcome to the world of gaming
          </h1>
          </Fade>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          With over 20 million players worldwide, our platform brings together gaming enthusiasts to share thrilling experiences. With 21 million+ downloads and availability in 24+ countries, we are committed to delivering quality gaming. Our 20+ years of experience make us a trusted name in the gaming industry.

          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
             <Fade  cascade>
             <h3 className="text-3xl font-bold text-blue-600">20M+</h3>
             <p className="mt-2 text-gray-600">Total Players</p>
             </Fade>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <Fade  cascade>
             <h3 className="text-3xl font-bold text-green-600">21M+</h3>
             <p className="mt-2 text-gray-600">Total Downloads</p>
             </Fade>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <Fade cascade>
             <h3 className="text-3xl font-bold text-purple-600">24+</h3>
             <p className="mt-2 text-gray-600">Countries</p>
             </Fade>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
             <Fade cascade>
             <h3 className="text-3xl font-bold text-yellow-600">20+</h3>
             <p className="mt-2 text-gray-600">Years Experience</p>
             </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GamingStatsSection;
  