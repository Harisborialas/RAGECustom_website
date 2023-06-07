import Client from "./footer/brands/Clients";
import Footer from "./footer/footer/Footer";
import Newsletter from "./footer/newsLetter/Newsletter";
import MidContent from "./mid_content/MidContent";
import Navbar from "./navbar/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <MidContent />
      <Newsletter />
      <Client />
      <Footer/>
    </>
  );
};
export default Index;
