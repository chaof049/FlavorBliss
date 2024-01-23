import Ad from "../components/ad/Ad";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/pricing/Pricing";

const Homepage = () => {
  return (
    <div className=" bg-[#F5F5FF]">
      <Navbar></Navbar>
      <Hero></Hero>
      <Ad></Ad>
      <Pricing></Pricing>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
