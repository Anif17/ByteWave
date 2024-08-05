import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ImgContent from "../assets/Content.jpg";

function About_Us() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with custom settings
  }, []);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
              data-aos="fade-left"
            >
              <img
                alt="Content"
                src={ImgContent}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24" data-aos="fade-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Keep Your Devices Running Smoothly
              </h2>

              <p className="mt-4 text-gray-600">
                Don&apos;t let a broken device slow you down. Our expert repair
                services will have your computers, phones, and gaming consoles
                up and running in no time. Whether it&apos;s a cracked screen, a
                virus, or hardware failure, we&apos;ve got you covered.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                data-aos="zoom-in"
              >
                Book a Repair Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About_Us;
