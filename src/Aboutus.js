import React, { useState } from "react";
import HowtoUseApp from "./API/HowtoUseApp";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(HowtoUseApp);

  return (
    <>
      {/* **********************1st part of about us section ***************************** */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutimg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* **********************2nd part of about us section ***************************** */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">--SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> avilable 24/87{" "}
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutimg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
