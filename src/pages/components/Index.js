import Navbar from "./navbar/Navbar";
import MidContent from "./mid_content/MidContent";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/evershop");
  //     const data = await response.json();
  //     setData(data);
  //     console.log("Data", data);
  //   } catch (error) {
  //     console.error("An error occurred :", error);
  //   }
  // };
  return (
    <>
     
      <Navbar />
      <MidContent />
      <Footer />
    </>
  );
};

export default Index;
