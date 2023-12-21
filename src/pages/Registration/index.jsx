import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import REGISTROEMPRESAInput from "components/RegistrationInput";

const REGISTROUSUARIOPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="md:h-[672px] h-[678px] sm:h-[857px] relative w-[45%] sm:w-full">
          <div className="absolute bg-gray-800 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col items-start justify-start mb-[99px] mt-1.5 w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterBold24"
              >
                Register Admin
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[43px] text-gray-500 text-sm"
                size="txtInterMedium14"
              >
                Personal Information
              </Text>
              <REGISTROEMPRESAInput
                className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[23px] pr-0.5 pt-0.5 w-[99%] md:w-full"
                passwordtext="Full Name"
              />
              <div className="sm:gap-5 gap-[42px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-8 w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14"
                      >
                        DNI
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        8
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
                        Phone
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        8
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
                        Email
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
                        Address
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[40px] text-center text-sm"
                        shape="round"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        50
                      </Button>
                    </div>
                    <Line className="bg-gray-500 h-0.5 w-full" />
                  </div>
                </div>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-12 text-gray-500 text-sm"
                size="txtInterMedium14"
              >
                User Data
              </Text>
              <div className="bg-blue_gray-900 flex flex-row items-center justify-between mt-[23px] p-[5px] rounded-[12px] w-full">
                <Text
                  className="ml-1.5 text-gray-500 text-sm"
                  size="txtInterMedium14"
                >
                  Name_LastName
                </Text>
                <Input
                  name="language"
                  placeholder="    @dominio.com"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-50 text-left text-sm w-full"
                  wrapClassName="mr-1"
                  color="gray_800"
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start mt-3 w-full">
                <REGISTROEMPRESAInput className="flex flex-col items-center justify-end pr-0.5 pt-0.5 w-full" />
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-900 bottom-[0] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
            <div className="flex sm:flex-1 flex-row items-end justify-center w-[34%] sm:w-full">
              <Img
                className="h-[25px] w-6"
                src="images/img_bxbxsfileexport.svg"
                alt="bxbxsfileexport"
              />
              <Text
                className="ml-[5px] mt-[9px] text-indigo-A200 text-sm"
                size="txtInterMedium14IndigoA200"
              >
                Import Sales Sheet
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[88px] sm:ml-[0] ml-[93px] text-center text-sm"
              shape="round"
              color="gray_800"
              size="sm"
              variant="fill"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[88px] sm:ml-[0] mx-3 text-center text-sm"
              shape="round"
              color="indigo_A200_66"
              size="sm"
              variant="fill"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default REGISTROUSUARIOPage;
