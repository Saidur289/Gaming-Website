
import { Fade } from "react-awesome-reveal";
import Games from "../components/Games";
import GamingStatsSection from "../components/GamingStatsSection";
import OurValueSection from "../components/OurValueSection";
import Slide from "../components/Slide";
import { useLoaderData } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import FeedBack from "../components/FeedBack";

const Home = () => {
  const loadedReview = useLoaderData() || []
  return (
    <div>
     
     <Slide></Slide>
   <div className="bg-gradient-to-r from-blue-200 to-purple-200">
    <div className="p-5  ">
    <h1 className="text-center text-3xl pb-7 font-bold text-blue-950">
  <Typewriter
    options={{
      strings: ['Highest Rated Games'],
      autoStart: true,
      loop: true,
    }}
  />
</h1>
    <p className="text-center md:4/5 mx-auto pb-7 font-thin text-gray-700">Explore the pinnacle of gaming excellence in our Highest Rated Games section. Curated from top reviews and player ratings, this collection features the most acclaimed games that deliver unforgettable experiences. From thrilling adventures to epic battles, discover why these games have earned their spot as fan favorites!"</p>
    </div>
   <Fade cascade>
    <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 lg:p-8">
      {
        Array.isArray(loadedReview) && loadedReview.slice(0,6).map((review, index) => <Games to review = {review} key={index}></Games>)
      }

    </div>
    </Fade>
   </div>
     <GamingStatsSection></GamingStatsSection>
     <OurValueSection></OurValueSection>
     <FeedBack></FeedBack>
     
    </div>
  );
};

export default Home;
