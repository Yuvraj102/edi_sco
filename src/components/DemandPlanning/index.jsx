import React from "react";

import { Img } from "components";

const TABLERODECONTROLSidebarcompact = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 md:h-auto object-cover w-6"
          src="images/img_fachain.png"
          alt="fachain"
        />
        <div className="flex flex-col gap-2 items-center justify-start mt-[63px] w-[65%] md:w-full">
          <div className="bg-indigo-A200_66 flex flex-col items-center justify-start p-[13px] rounded-[12px] w-full">
            <Img
              className="h-[17px] my-0.5 w-[18px]"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
          </div>
          <Img
            className="h-12"
            src="images/img_calculator.svg"
            alt="calculator"
          />
          <Img
            className="h-12"
            src="images/img_component5.svg"
            alt="componentFive"
          />
          <Img
            className="h-12"
            src="images/img_component4.svg"
            alt="componentFour"
          />
          <Img
            className="h-12"
            src="images/img_component8.svg"
            alt="componentEight"
          />
          <Img
            className="h-12"
            src="images/img_component9.svg"
            alt="componentNine"
          />
          <Img className="h-12" src="images/img_user.svg" alt="user" />
        </div>
        <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[134px] p-2.5 w-full">
          <Img
            className="h-12 md:h-auto my-1.5 rounded-[50%] w-12"
            src="images/img_rectangle6.png"
            alt="rectangleSix"
          />
        </div>
      </div>
    </>
  );
};

TABLERODECONTROLSidebarcompact.defaultProps = {};

export default TABLERODECONTROLSidebarcompact;
