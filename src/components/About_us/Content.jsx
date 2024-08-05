import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

import Company1 from "../../assets/images/Company1.jpg";
import Company2 from "../../assets/images/Company2.jpg";
import Company3 from "../../assets/images/Company3.jpg";

export default function AboutInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="bg-white px-0 sm:px-24" id="about_info">
        <div className="text-center">
          <h2
            className="mb-2 mt-10 font-['Inter'] text-3xl font-bold text-gray-900 sm:text-3xl textp"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Our{" "}
            <span className="bg-gradient-to-b from-[#ff1f1f] to-[#FFBF1B] bg-clip-text text-transparent font-bold">
              Success Stories{" "}
            </span>
          </h2>
        </div>

        <h2
          className="font-Oswald mb-20 text-center text-4xl font-bold tracking-tight text-gray-900"
          data-aos="fade-up"
          data-aos-once="true"
        ></h2>

        <div
          className="mt-20 mb-20 grid gap-20 px-3 sm:px-0 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <img
              src={Company1}
              className="transform rounded-md px-3 drop-shadow-xl transition duration-500 hover:scale-110 sm:rounded-md sm:px-0"
              alt="SmithTech Solutions"
            ></img>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className="text-center text-2xl font-medium text-black sm:text-left">
                SmithTech Solutions
              </h1>
            </div>
            <br></br>
            <div>
              <h2 className="px-3 text-justify text-black sm:px-0 ">
                SmithTech Solutions was struggling with outdated and
                malfunctioning computer systems that were affecting their
                business operations. They approached us to overhaul their entire
                IT infrastructure. Our team provided comprehensive computer
                repair services, installed new hardware, and ensured seamless
                software integration. With our help, SmithTech Solutions now
                operates with greater efficiency and minimal downtime.
              </h2>
            </div>
          </div>
        </div>

        <div
          className="mt-20 mb-20 flex flex-col-reverse gap-20 px-3 lg:grid lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className=" text-center text-2xl font-medium text-black sm:text-left">
                Green Mobile Repairs
              </h1>
            </div>

            <br></br>
            <div>
              <h2 className="px-3 text-justify text-black sm:px-0">
                Green Mobile Repairs needed to expand their service offerings to
                include console repairs. They lacked the expertise and tools
                necessary to branch out into this area. We provided them with
                specialized training, the required tools, and ongoing support.
                As a result, Green Mobile Repairs successfully added console
                repair services to their portfolio, increasing their revenue and
                customer base.
              </h2>
            </div>
          </div>

          <div>
            <img
              src={Company2}
              className="transform rounded-md px-3 drop-shadow-xl transition duration-500 hover:scale-110 sm:rounded-md sm:px-0"
              alt="Green Mobile Repairs"
            ></img>
          </div>
        </div>

        <div
          className="mt-20 mb-20 grid gap-20 px-3 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div>
            <img
              src={Company3}
              className="transform rounded-md px-3 drop-shadow-xl transition duration-500 hover:scale-110 sm:rounded-md sm:px-0"
              alt="Gamer’s Haven"
            ></img>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className="text-center text-2xl font-medium text-black sm:text-left">
                Gamer’s Haven
              </h1>
            </div>

            <br></br>
            <div>
              <h2 className="px-3 text-justify text-black sm:px-0">
                Gamer’s Haven, a local gaming store, wanted to expand their
                product range and enhance their customer experience. They
                reached out to us for assistance in sourcing the latest gaming
                consoles, setting up an online store, and offering repair
                services. We supplied them with the best products, set up their
                e-commerce platform, and trained their staff in console repairs.
                Gamer’s Haven is now a go-to destination for gamers in the area,
                thanks to our support.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
