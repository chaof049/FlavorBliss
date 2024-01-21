import Ad from "../components/ad/Ad";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Pricing from "../components/pricing/Pricing";

const Homepage = () => {
  return (
    <div className="my-custom-font font-my-custom-font bg-[#F5F5FF]">
      <Header></Header>
      <Hero></Hero>
      <Ad></Ad>
      <Pricing></Pricing>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
