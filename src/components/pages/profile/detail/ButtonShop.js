import React from "react";

const ButtonShop = ({ url, icon, name }) => {
  return (
    <div>
      <a href={url}>
        <div className="pb-5">
          <button className=" btn normal-case border-white border-2">
            <div className="mx-0 sm:mx-24 grid grid-cols-2 items-center">
              <div className="  w-28 flex justify-end">
                <img src={icon} alt="" width={30} />
              </div>
              <div>
                <h1 className="mx-2  w-28 flex justify-start text-base text-white font-normal">
                  {name}
                </h1>
              </div>
            </div>
          </button>
        </div>
      </a>
    </div>
  );
};

export default ButtonShop;
