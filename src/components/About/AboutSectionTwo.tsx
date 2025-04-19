import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-8 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/1.jpeg"
                alt="about image"
                fill
                // className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              {/* <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What is Maintenance Free Earthing?
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Earthing, also known as grounding, is the practice of
                  transferring electrical charges to the ground through
                  low-resistance cables or rods to quickly discharge any stored
                  energy.
                </p>
              </div>
              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Benefits of Maintenance Free Earthing:
                </h2>
                <ul className="list-inside list-disc text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li className="mb-2">
                    Protecting installations and machinery by providing a
                    low-impedance path for fault currents
                  </li>
                  <li className="mb-2">
                    Providing the system with an equipotential reference
                    voltage
                  </li>
                  <li className="mb-2">
                    Having a lifespan greater than 20 years
                  </li>
                  <li className="mb-2">Being non-corrosive</li>
                  <li className="mb-2">
                    Remaining intact with the Earth Rod
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
