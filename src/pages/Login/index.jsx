import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Line, Text } from "components";
import REGISTROEMPRESAInput from "components/RegistrationInput";

const REGISTROEMPRESAPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto p-[126px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-800 flex flex-col items-center justify-start pt-8 md:px-5 rounded-[12px] w-[51%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterBold24"
              >
                <>
                  Register Basic Company <br />
                  Information
                </>
              </Text>
              <REGISTROEMPRESAInput
                className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[102px] pr-0.5 pt-0.5 w-full"
                passwordtext="Business name:"
              />
              <div className="sm:gap-5 gap-[42px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-8 w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14"
                      >
                        RUC
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        10
                      </Button>
                    </div>
                    <Line className="bg-gray-500 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14"
                      >
                        Repr legal
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        40
                      </Button>
                    </div>
                    <Line className="bg-gray-500 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14"
                      >
                        Domain
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        10
                      </Button>
                    </div>
                    <Line className="bg-gray-500 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14"
                      >
                        Address
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        40
                      </Button>
                    </div>
                    <Line className="bg-gray-500 h-0.5 w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-900 flex sm:flex-col flex-row gap-3 items-center justify-center p-[25px] sm:px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[88px] sm:ml-[0] ml-[271px] text-center text-sm"
                shape="round"
                color="gray_800"
                size="sm"
                variant="fill"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[88px] mr-[13px] text-center text-sm"
                onClick={() => navigate("/registrousuario")}
                shape="round"
                color="indigo_A200_99"
                size="sm"
                variant="fill"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default REGISTROEMPRESAPage;
