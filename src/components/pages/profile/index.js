import React from "react";
import { data } from "../../../data/data";

function index() {
  return (
    // <div>Profile
    // </div>
    <div>
      <div className="avatar w-full flex justify-center">
        <div className="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className=" text-center">
        <p className=" pt-10 font-medium text-xl">Extra Cemil</p>
        <p className=" pt-4 font-extralight text-sm">
          Malang, Jawa Timur, Indonesia
        </p>
      </div>

      <div className=" pt-10  ">
        {data.map((item, index) => (
          <div key={index}>
            <a href={item.url}>
              <div className="pb-5">
                <button className=" btn w-96 md:w-80 normal-case">
                  <div className=" grid grid-cols-2 items-center">
                    <div className=" ">
                      <img src={item.icon} className="  w-8 " />
                    </div>
                    <div>
                      <h1 className="">{item.name}</h1>
                    </div>
                  </div>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
