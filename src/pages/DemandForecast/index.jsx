import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ListaunidadnegocioPage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-12"
          src="images/img_calculator.svg"
          alt="calculator"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-12"
          src="images/img_component5.svg"
          alt="componentFive"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-12"
          src="images/img_component4.svg"
          alt="componentFour"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-12"
          src="images/img_component8.svg"
          alt="componentEight"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-12"
          src="images/img_component9.svg"
          alt="componentNine"
        />
      ),
    },
    { label: <Img className="h-12" src="images/img_user.svg" alt="user" /> },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-900 flex flex-row font-inter items-start mx-auto md:pr-10 sm:pr-5 pr-[912px] w-full">
        <Sidebar className="!sticky !w-[68px] bg-gray-900_33 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <Img
            className="h-6 md:h-auto mt-[35px] mx-auto object-cover w-6"
            src="images/img_fachain.png"
            alt="fachain"
          />
          <div className="bg-indigo-A200_66 flex flex-col items-center justify-start mt-[63px] mx-auto p-[13px] rounded-[12px] w-[65%]">
            <Img
              className="h-[17px] my-0.5 w-[18px]"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingBottom: "8px",
                flexDirection: "column",
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
            className="flex flex-col items-center justify-start mt-2 w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[134px] p-2.5 w-full">
            <Img
              className="h-12 md:h-auto my-1.5 rounded-[50%] w-12"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
          </div>
        </Sidebar>
        <div className="bg-gray-900_4c flex flex-1 flex-col gap-[51px] items-center justify-start p-3 md:px-5 w-full">
          <div className="flex flex-col gap-14 items-start justify-start mt-[23px] w-[92%] md:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-50"
              size="txtInterBold28"
            >
              Demand Forecast
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
          <div className="flex flex-col gap-2 items-center justify-start mb-[179px] w-full">
            <Input
              name="frameThree"
              placeholder="All Items"
              className="leading-[normal] p-0 placeholder:text-gray-50 text-left text-xl w-full"
              wrapClassName="w-full"
              color="gray_500_33"
              size="xs"
            ></Input>
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
                Phramacies
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaunidadnegocioPage;
