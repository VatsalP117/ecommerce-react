import React from "react";
export default function WelcomePage() {
  return (
    <div className="flex md:flex-row flex-col  welcome-page pb-6">
      <div className="welcome-page-left flex flex-col justify-center gap-4 md:pl-7 pl-5 p-4 ">
        <div className="main-text flex flex-col">
          <div className="welcome-heading-text-1 text-6xl font-extrabold">
            Select Your New
          </div>
          <div className="welcome-heading-text-1 text-6xl md:text-5xl font-extrabold ">
            Perfect Style
          </div>
        </div>
        <p className="secondary-text max-w-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          molestiae consectetur voluptatem enim veniam neque eius
        </p>
        <button className="shop-button text-center p-2 rounded-full w-28 text-white font-semibold">
          Shop Now
        </button>
      </div>
      <div className="welcome-page-right flex justify-center  pt-0">
        <img src="/model-img-1.png" alt="" className="model-img mr-3" />
      </div>
    </div>
  );
}
