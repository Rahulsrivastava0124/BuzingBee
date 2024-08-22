import React, { useState } from "react";
import { Element } from "react-scroll";
import porfolio_1 from "../assets/image/portfolio_1.jpg";
import porfolio_2 from "../../src/assets/image/portfolio_2.jpg";


const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <Element id="portfolio" name="portfolio">
        <div
          id="Projects"
          className="p-5 my-5 bg-yellow-50 text-dark sm:mx-16 sm:block sm:my-10 md:rounded-3xl sm:p-10 sm:px-20"
        >
          <section className=" dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-2 md:px-4">
                  <div className="mx-auto mb-[60px] text-center">
                    {/* <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Portfolio
                </span> */}
                    <h2 className="text-dark font-bold text-center sm:mb-3 mt-5 text-xl leading-[1.8] sm:text-4xl   md:text-5xl">
                      Real world examples of how we have helped Companies
                      achieve their marketing objectives.
                    </h2>
                    {/* <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center w-full sm:-mx-4">
                <div className="w-full md:px-4">
                  <ul className="flex flex-wrap justify-center mb-8 md:space-x-2">
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("all")}
                        className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "all"
                            ? "activeClasses bg-white text-black"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                        }`}
                      >
                        All Projects
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("branding")}
                        className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "branding"
                            ? "activeClasses bg-white text-black"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                        }`}
                      >
                        Branding
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("design")}
                        className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "design"
                            ? "activeClasses bg-white text-black"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                        }`}
                      >
                        Design
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("marketing")}
                        className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "marketing"
                            ? "activeClasses bg-white text-black"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                        }`}
                      >
                        Marketing
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        onClick={() => handleProject("development")}
                        className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                          showCard === "development"
                            ? "activeClasses bg-white text-black"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                        }`}
                      >
                        Development
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="flex flex-wrap -mx-4"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <PortfolioCard
                  ImageHref={porfolio_1}
                  category="Astropoints"
                  title="This website for astrologer points "
                  button="View"
                  buttonHref="https://astropoints.in/"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref={porfolio_2}
                  category="Triconnix"
                  title="digital services website "
                  button="View"
                  buttonHref="https://triconnix.com/ "
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
                  category="marketing"
                  title="Creative Agency"
                  button="View"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
                  category="Development"
                  title="Creative Agency"
                  button="View"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
                  category="Design"
                  title="Creative Agency"
                  button="View"
                  buttonHref="#"
                  showCard={showCard}
                />
                <PortfolioCard
                  ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
                  category="Marketing"
                  title="Creative Agency"
                  button="View"
                  buttonHref="#"
                  showCard={showCard}
                />
              </div>
            </div>
          </section>
        </div>
      </Element>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full sm:px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-8 h-[220px]">
          {/* <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full h-[100px]" />
          </div> */}
          <div
            className={`relative z-10 mx-7  rounded-2xl dark:bg-dark-2 pt-[105px] pb-5  px-3 text-center shadow-portfolio dark:shadow-box-dark overflow-hidden`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.7120098039215687) 0%, rgba(0,0,0,0.5383403361344538) 100%), url(${ImageHref})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img
              src={ImageHref}
              alt="portfolio"
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-50 bg-blend-lighten"
              data-aos="fade-right"
              data-aos-duration="2000"
            /> */}

            <h3 className="mb-3 text-lg font-bold text-left text-white ">{title}</h3>
            <span className="flex items-center justify-between text-2xl font-medium text-white ">
              {category}{" "}
              <a
                href={buttonHref}
                className="btn btn-outline btn-sm btn-warning py-[10px] px-4 text-xs font-medium transition"
              >
                {button}
              </a>
            </span>
          </div>
        </div>
       
      </div>
    </>
  );
};
