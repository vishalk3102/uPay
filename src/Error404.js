import React from "react";

const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="not-found">
          <div className="not-found-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry! page not found!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <a href="/">Back to Home page</a>
        </div>
      </div>
    </>
  );
};

export default Error404;
