
import Games from "../components/Games";
import GamingStatsSection from "../components/GamingStatsSection";
import OurValueSection from "../components/OurValueSection";
import Slide from "../components/Slide";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedReview = useLoaderData() || []
  console.log(loadedReview);
  return (
    <div className="py-5">
     
     <Slide></Slide>
    <div className="bg-gradient-to-r from-blue-200 to-purple-300 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 lg:p-8">
      {
        Array.isArray(loadedReview) && loadedReview.map((review, index) => <Games to review = {review} key={index}></Games>)
      }

    </div>
     <GamingStatsSection></GamingStatsSection>
     <OurValueSection></OurValueSection>
     
    </div>
  );
};

export default Home;
