import Person1 from "../assets/Person1.jpg";
import Person2 from "../assets/Person2.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration as needed
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {/* Star icons */}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    John Doe
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                &ldquo;The team at ByteWave did an amazing job repairing my
                laptop. The service was quick, and now it works better than
                ever. Highly recommend!&ldquo;
              </p>
            </blockquote>

            <blockquote
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={Person1}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {/* Star icons */}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Jane Smith
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                &quot;I purchased a gaming console here, and the experience was
                fantastic. The staff were knowledgeable, and the product quality
                is top-notch. Will definitely shop here again!&quot;
              </p>
            </blockquote>

            <blockquote
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={Person2}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {/* Star icons */}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Alex Johnson
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                &quot;The repair services at ByteWave are top-notch. They fixed
                my phone quickly and efficiently. Highly recommended for their
                excellent customer service!&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
