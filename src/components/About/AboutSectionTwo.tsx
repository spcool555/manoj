import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center">
          {/* Left Image Section */}
          <div className="w-full px-8 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/1.jpeg"
                alt="about image"
                fill
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What is Maintenance Free Earthing?
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Earthing, also known as grounding, is the practice of transferring electrical charges to the ground through low-resistance cables or rods to quickly discharge any stored energy.
                </p>
              </div>

              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Benefits of Maintenance Free Earthing:
                </h2>
                <ul className="list-inside list-disc text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li className="mb-2">Protecting installations and machinery by providing a low-impedance path for fault currents</li>
                  <li className="mb-2">Providing the system with an equipotential reference voltage</li>
                  <li className="mb-2">Having a lifespan greater than 20 years</li>
                  <li className="mb-2">Being non-corrosive</li>
                  <li className="mb-2">Remaining intact with the Earth Rod</li>
                </ul>
              </div>

              {/* Factsheet Section */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Factsheet - Basic Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium text-body-color sm:text-lg">
                  <p><strong>Nature of Business:</strong> NA</p>
                  <p><strong>Additional Business:</strong> Wholesale Business</p>
                  <p><strong>Company CEO:</strong> Prakash Kasnaji Rathod</p>
                  <p><strong>Total Employees:</strong> 50 + People</p>
                  <p><strong>GST Registration Date:</strong> 01-07-2017</p>
                  <p><strong>Legal Status:</strong> Proprietorship</p>
                  <p><strong>Annual Turnover:</strong>  01 cr - 04 cr</p>
                  <p><strong>GST Partner Name:</strong> Prakash Kasnaji Rathod</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
