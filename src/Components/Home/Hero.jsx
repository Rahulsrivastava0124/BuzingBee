import hero1 from "../../assets/image/hero1.jpg";
import CountUp from "react-countup";
import { Element } from "react-scroll";

const getAssetSrc = (asset) =>
  typeof asset === "string" ? asset : asset?.src || "";

export default function Hero() {
  return (
    <>
      <Element id="home" name="home">
        <section
          id="Home"
          className="mx-6 my-32 rounded-md sm:mx-16 sm:flex"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="sm:w-[50%]">
            <h1 className="text-3xl font-medium sm:text-7xl">
              <span data-aos="fade-up" data-aos-duration="1000">
                Automate your{" "}
              </span>
              <span>marketing with</span>
              <span> AI-powered</span>
              <span className="text-yellow-400"> agents</span>
            </h1>
            <h5 className="mt-4 text-sm text-gray-500 sm:mt-8 md:text-lg sm:pe-32">
              Intelligent automation for digital marketing. Streamline your
              campaigns, optimize conversions, and scale your business with AI
              agents that work 24/7. No coding required.
            </h5>

            <div className="flex items-center mt-6 sm:mt-10">
              <button
                className="text-white rounded-full btn  btn-warning btn-sm sm:btn-md ps-6"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Book a Free Demo Today
              </button>
              {/* <a
                href="/"
                className="hidden font-bold underline sm:block ms-20"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                See Automation Flow
              </a> */}
            </div>
            <div
              className=" gap-4 mt-8 sm:mt-12"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1400"
            >
              <h1 className="font-bold sm:w-44 mb-3"> Our Certificate </h1>
              <div className="flex flex-wrap gap-4">
                <img
                  src="/certificate1.webp"
                  alt="Certificate 1"
                  className="h-16 sm:h-20 w-auto"
                />
                <img
                  src="/certificate2.webp"
                  alt="Certificate 2"
                  className="h-16 sm:h-20 w-auto"
                />
                <img
                  src="/certificate3.webp"
                  alt="Certificate 3"
                  className="h-16 sm:h-20 w-auto"
                />
                <img
                  src="/certificate4.webp"
                  alt="Certificate 4"
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] py-10">
            <div
              className="flex-wrap items-center mb-3 sm:flex justify-evenly sm:p-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <div className="bg-gray-50 rounded-tl-[100%] rounded-lg sm:w-[43%] hidden sm:block sm:h-[250px] relative">
                <button className="absolute w-10 h-10 p-10 text-center bg-black btn btn-circle bottom-52 right-10">
                  <i className="absolute text-lg font-extrabold text-center bg-yellow-400 rounded-lg bi bi-graph-up-arrow w-9 h-9"></i>
                </button>
                <div className="rounded-tl-[100%] rounded-lg overflow-hidden">
                  <img
                    src={getAssetSrc(hero1)}
                    alt="Hero"
                    className="max-w-[135%]"
                  />
                </div>
              </div>
              <div className="bg-yellow-100 rounded-xl sm:w-[43%] sm:h-[250px] p-5">
                <div>
                  <h1 className="text-6xl font-bold text-left sm:text-8xl sm:text-center">
                    <CountUp end={87} duration={2.75} />%
                  </h1>
                </div>
                <div className="m-auto">
                  <h1 className="mt-2 text-lg ms-2">
                    Automation saves time & increases conversion rates.
                    <progress
                      className="w-56 progress progress-warning"
                      value="87"
                      max="100"
                    ></progress>
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="pb-12 bg-black sm:w-[86%] bg-[url(./assets/image/cart_bar-hero.png)] bg-right-bottom bg-no-repeat m-auto rounded-xl sm:h-[200px] p-5 flex relative sm:bg-contain"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
            >
              <div>
                <div
                  className="flex items-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1300"
                >
                  <hr className="w-8 mt-5 font-bold sm:w-16 sm:me-5 me-2" />
                  <h1 className="mt-5 text-white">
                    AI-Powered Marketing Automation
                  </h1>
                </div>
                <div
                  className="sm:w-[60%]"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1300"
                >
                  <h1 className="mt-4 text-3xl text-white sm:text-4xl">
                    Intelligent workflows that drive results
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}
