import React from "react";
import { data } from "../../../data/data";
import ButtonShop from "./detail/ButtonShop";

function index() {
  return (
    <div className=" h-screen flex items-center">
      <di className="px-5 sm:px-0">
        <div className="avatar w-full flex justify-center ">
          <div className="w-32 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className=" text-center">
          <p className=" pt-10 font-medium text-2xl text-gray-900">
            Extra Cemil
          </p>
          <p className=" pt-4 font-extralight text-sm text-gray-900">
            Malang, Jawa Timur, Indonesia
          </p>
        </div>

        <div className=" pt-10  ">
          {data.map((item, index) => (
            <ButtonShop
              key={index}
              url={item.url}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
      </di>
    </div>
  );
}

export default index;
