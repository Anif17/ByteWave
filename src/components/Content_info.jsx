import Unmatched_Expertise from "../assets/Unmatched_Expertise.png";
import Quality_Products from "../assets/Quality_Products.png";
import Customer_Centric_Service from "../assets/Customer_Centric_Service.png";
import Innovative_Solutions from "../assets/Innovative_Solutions.png";
import Fast_Turnaround from "../assets/Fast_Turnaround.png";
import Comprehensive_Support from "../assets/Comprehensive_Support.png";

function Content_info() {
  return (
    <>
      <section className="bg-white text-gray-900 py-8 sm:py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>

            <p className="mt-4 text-gray-600">
              Our skilled technicians are experts in diagnosing and repairing a
              wide range of electronics. With years of experience, we handle
              each repair with precision and care.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Unmatched_Expertise} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Unmatched Expertise</h3>

                <p className="mt-1 text-sm text-gray-600">
                  Our team of experienced technicians ensures that every repair
                  is handled with precision and care. From computers and mobile
                  phones to gaming consoles and other electronics, we have the
                  skills to get your devices back in top shape.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Quality_Products} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Quality Products</h3>

                <p className="mt-1 text-sm text-gray-600">
                  We offer a curated selection of the latest computers,
                  smartphones, and gaming consoles. Each product is chosen for
                  its reliability and performance, so you can trust that you’re
                  getting the best technology available.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Customer_Centric_Service} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Customer-Centric Service</h3>

                <p className="mt-1 text-sm text-gray-600">
                  At Byteware, your satisfaction is our priority. We provide
                  personalized service and tailored solutions to meet your
                  specific needs, whether you’re shopping for new tech or
                  seeking repairs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Innovative_Solutions} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Innovative Solutions</h3>

                <p className="mt-1 text-sm text-gray-600">
                  We stay ahead of the curve with the latest technology and
                  repair techniques. Whether it&apos;s a cutting-edge gadget or
                  a complex repair issue, we have the solutions to keep you
                  connected and satisfied.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Fast_Turnaround} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Fast Turnaround</h3>

                <p className="mt-1 text-sm text-gray-600">
                  We understand that your time is valuable. That’s why we strive
                  to provide quick and efficient repairs without compromising on
                  quality, ensuring minimal downtime for your devices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-100 p-4">
                <img className="h-5 w-5" src={Comprehensive_Support} />
              </span>

              <div>
                <h3 className="text-lg font-bold">Comprehensive Support</h3>

                <p className="mt-1 text-sm text-gray-600">
                  From troubleshooting to in-depth repairs, our support team is
                  here to help you every step of the way. We provide clear
                  guidance and answer all your questions to ensure a seamless
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content_info;
