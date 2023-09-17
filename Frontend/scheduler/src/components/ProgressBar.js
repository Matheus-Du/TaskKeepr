import React from "react";


export const ProgressBar = ({ fillArray, description, title }) => {
  return (
    <div className="flex grow">
    <div className="w-1/8 flex items-center">
        <p className="text-gray-100 px-6 py-12 ">{title}</p>
        <p className="">{description}</p>
    </div>

    <div
      className={`flex-1/7 grow ${
        fillArray[0]
          ? "relative bg-blue-500 border-blue-500"
          : "bg-gray-100"
      }`}
    >
      {
            fillArray[0] ? <>
            <div className="flex relative grow bg-blue-500">
            <p className="relative "></p>
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
    </div>
      <div
        className={`flex-1/7 border grow ${fillArray[1] ? "bg-blue-500 border-blue-500": 'bg-gray-100'}`}
      >
        {
            fillArray[1] ? <>
            <div className="flex grow bg-blue-500 ">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[2] ? "bg-blue-500 border-blue-500" : 'bg-gray-100'}`}
      >
       {
            fillArray[2] ? <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[3] ? "bg-blue-500 border-blue-500": 'bg-gray-100'}`}
      >
      {
            fillArray[3] ? <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[4] ? "bg-blue-500 border-blue-500" : 'bg-gray-100'}`}
      >
            {
            fillArray[4] ? <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[5] ? "bg-blue-500 border-blue-500" : "bg-gray-100"}`}
      >
        {
            fillArray[5] ? <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[6] ? "bg-blue-500 border-blue-500" : 'bg-gray-100'}`}
      >
       {
            fillArray[6] ? <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
            </> : <>
            <div className="flex grow bg-gray-100">
            <p className="text-gray-100">continue</p>
            </div>
            </>
        }
      </div>
    </div>
  );
};
