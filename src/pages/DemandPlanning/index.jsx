import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import TABLERODECONTROLSidebarcompact from "components/DemandPlanning";

import { CloseSVG } from "../../assets/images";

const TABLERODECONTROLPage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[95%] md:w-full">
          <TABLERODECONTROLSidebarcompact className="bg-gray-900_33 flex flex-col items-center justify-start mb-[454px] pt-[35px] w-[6%] md:w-full" />
          <div className="flex flex-col md:gap-10 gap-[87px] items-center justify-start pb-[39px] w-1/4 md:w-full">
            <div className="bg-gray-900_4c flex flex-col gap-[51px] items-center justify-start p-3 w-full">
              <div className="flex flex-col gap-14 items-start justify-start mt-[23px] w-[92%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-50"
                  size="txtInterBold28"
                >
                  Dashboard
                </Text>
                <Input
                  name="searchbar"
                  placeholder="Search"
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="!placeholder:text-gray-500 !text-gray-500 font-medium leading-[normal] p-0 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <div className="h-[19px] mr-[15px] w-[19px] outline-gray-500 outline-[1px] outline">
                      <Img
                        className="cursor-pointer h-[19px] my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#aaabb0"
                      className="cursor-pointer h-[19px] my-auto"
                      onClick={() => setSearchbarvalue("")}
                      style={{
                        visibility:
                          searchbarvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={19}
                      width={19}
                      viewBox="0 0 19 19"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mb-[459px] w-full">
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-20"
                    size="txtInterRegular20"
                  >
                    All Items
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-[164px]"
                    size="txtInterRegular20"
                  >
                    Consumer Goods
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-[104px]"
                    size="txtInterRegular20"
                  >
                    Electronics
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-[84px]"
                    size="txtInterRegular20"
                  >
                    Furniture
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-[194px]"
                    size="txtInterRegular20"
                  >
                    Food and Beverages
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-[276px]">
                  <Text
                    className="text-gray-50 text-xl w-[110px]"
                    size="txtInterRegular20"
                  >
                    Pharmacies
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[252px]"
              onClick={() => navigate("/listaunidadnegocio")}
              leftIcon={
                <Img
                  className="mr-5"
                  src="images/img_biarrowupshort.svg"
                  alt="bi:arrow-up-short"
                />
              }
              shape="round"
              color="indigo_A200_66"
              size="xs"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Demand Forecast
              </div>
            </Button>
          </div>
          <div className="flex flex-col justify-start w-[70%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-[52px] md:h-auto items-start justify-start w-auto md:w-full">
              <Input
                name="frameNineteen"
                placeholder="Demand Planning"
                className="leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-base text-left w-full"
                wrapClassName="w-[31%] md:w-full"
                shape="square"
                color="indigo_A200"
                size="lg"
              ></Input>
              <div className="flex flex-col h-[52px] md:h-auto items-start justify-start px-3 py-2.5 w-[237px]">
                <Text
                  className="text-base text-gray-50 w-[110px]"
                  size="txtInterRegular16"
                >
                  Insert Records{" "}
                </Text>
              </div>
              <div className="flex flex-col h-[52px] md:h-auto items-start justify-start px-3 py-2.5 w-[237px]">
                <Text
                  className="text-base text-gray-50 w-[92px]"
                  size="txtInterRegular16"
                >
                  Source Data
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[238px] mt-[27px] sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-50"
              size="txtInterBold28"
            >
              <>
                Data Feed
                <br />
                Status
              </>
            </Text>
            <Img
              className="h-[350px] sm:h-auto md:ml-[0] ml-[52px] mt-[50px] object-cover w-[92%] md:w-full"
              src="images/img_demandplanning11.png"
              alt="demandplanningOne"
            />
            <Text
              className="md:ml-[0] ml-[360px] mt-[57px] text-center text-gray-50 text-xl"
              size="txtInterRegular20"
            >
              Seasonal Model
            </Text>
            <Img
              className="h-[301px] sm:h-auto md:ml-[0] ml-[26px] mt-12 object-cover w-[97%] md:w-full"
              src="images/img_demandplanning12.png"
              alt="demandplanningOne_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TABLERODECONTROLPage;
