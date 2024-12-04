
import Games from "../components/Games";
import GamingStatsSection from "../components/GamingStatsSection";
import OurValueSection from "../components/OurValueSection";
import Slide from "../components/Slide";

const Home = () => {
  return (
    <div className="space-y-6">
     
     <Slide></Slide>
     <Games></Games>
     <GamingStatsSection></GamingStatsSection>
     <OurValueSection></OurValueSection>
     
    </div>
  );
};

export default Home;
