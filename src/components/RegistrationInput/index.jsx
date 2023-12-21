import React from "react";

import { Button, Img, Line, Text } from "components";

const REGISTROEMPRESAInput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] items-center justify-start mt-1.5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[97%] md:w-full">
            <Text
              className="sm:mt-0 mt-[3px] text-gray-500 text-sm"
              size="txtInterMedium14"
            >
              {props?.passwordtext}
            </Text>
            {!!props?.eightbutton ? (
              <Button
                className="cursor-pointer font-inter font-medium leading-[normal] min-w-[41px] sm:ml-[0] ml-[293px] text-center text-sm"
                shape="round"
                color="gray_700"
                size="xs"
                variant="fill"
              >
                {props?.eightbutton}
              </Button>
            ) : null}
            <div className="bg-gray-700 flex flex-col items-center justify-start ml-2.5 sm:ml-[0] p-[3px] rounded-[12px] w-[10%] sm:w-full">
              {!!props?.eyeicon ? (
                <Img
                  className="h-6 w-6"
                  alt="akariconseye"
                  src={props?.eyeicon}
                />
              ) : null}
            </div>
          </div>
          <Line className="bg-gray-500 h-0.5 w-full" />
        </div>
      </div>
    </>
  );
};

REGISTROEMPRESAInput.defaultProps = { passwordtext: "********" };

export default REGISTROEMPRESAInput;
