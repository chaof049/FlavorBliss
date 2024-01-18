import Ad from "../components/ad/Ad";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Pricing from "../components/pricing/Pricing";

const Homepage = () => {
  return (
    <div className="my-custom-font font-my-custom-font">
      <Header></Header>
      <Hero></Hero>
      <Ad></Ad>
      <Pricing></Pricing>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Homepage;
