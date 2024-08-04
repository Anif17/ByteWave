import Hero from "../components/Hero.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Content_info from "../components/Content_info.jsx";
import About_Us from "../components/About_Us.jsx";
import New_Collection from "../components/New_Collection.jsx";

function home() {
  return (
    <>
      <Hero />
      <Content_info />
      <About_Us />
      <Testimonial />
      <New_Collection />
    </>
  );
}

export default home;
