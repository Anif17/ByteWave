import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

import SmartPhone from "../assets/Smartphones.jpg";
import Laptop from "../assets/Laptop.webp";
import Console from "../assets/Gaming_Consoles.jpg";

function New_Collection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center" data-aos="fade-up">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Arrivals
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Explore the latest in tech innovation. Whether you&apos;re looking
              for the newest smartphones, cutting-edge gaming consoles, or
              powerful computers, we&apos;ve got you covered. Check out our
              latest collection and elevate your tech game.
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li data-aos="fade-up">
              <a href="#" className="group relative block">
                <img
                  src={Laptop}
                  alt="High-Performance Laptop"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    High-Performance Laptops
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <a href="#" className="group relative block">
                <img
                  src={Console}
                  alt="Gaming Console"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Gaming Consoles
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li
              className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="#" className="group relative block">
                <img
                  src={SmartPhone}
                  alt="Smartphone"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Smartphones
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default New_Collection;
