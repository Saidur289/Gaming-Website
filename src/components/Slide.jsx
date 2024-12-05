import image1 from "../assets/image1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from '../assets/image3.jpg'
import { Fade } from "react-awesome-reveal";
const Slide = () => {
  return (
    <div className="carousel w-full md:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={image1}
          className="w-full"
          alt="Gaming Adventure"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <Fade>
          <h2 className="text-xl text-center md:text-4xl font-bold text-white">
            Explore the World of Gaming Adventures
          </h2>
          </Fade>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={image2}
          className="w-full"
          alt="Competitive Gameplay"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
         <Fade>
         <h2 className="text-xl text-center md:text-4xl font-bold text-white">
            Dive Into Competitive Gameplay
          </h2>
         </Fade>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={image3}
          className="w-full"
          alt="Immersive Graphics"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <Fade>
          <h2 className="text-xl text-center md:text-4xl font-bold text-white">
            Experience Stunning Immersive Graphics
          </h2>
          </Fade>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

    
    </div>
  );
};

export default Slide;
