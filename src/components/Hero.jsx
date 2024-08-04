import backgroundImage from "../assets/hero.png";

function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "70vh", // Set to a high value, e.g., 90% of the viewport height
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto lg:mx-10 max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center ">
          <div className="max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Revolutionize Your Tech Experience with
              <strong className="block font-extrabold text-rose-500">
                {" "}
                BYTEWAVE{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              &ldquo;Top-Quality Electronics, Expert Repairs, and Unbeatable
              Service&ldquo;
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
