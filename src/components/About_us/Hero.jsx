import backgroundImage from "../../assets/images/Hero_AboutUs.jpg";

function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "70vh", // Set to 70% of the viewport height
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto lg:mx-10 max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center">
          <div className="max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Revolutionize Your Tech Experience with
              <strong className="block font-extrabold text-rose-500">
                BYTEWAVE
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              &ldquo;Top-Quality Electronics, Expert Repairs, and Unbeatable
              Service&ldquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
