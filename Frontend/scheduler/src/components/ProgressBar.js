import React from "react";

export const ProgressBar = ({ fillArray }) => {
  return (
    <>
      <div className="w-1/8">
        <p className="text-gray-100 px-2 py-12">Task 1</p>
      </div>

      <div
        className={`flex-1/7 border grow ${fillArray[0] ? "bg-blue-500" : ""}`}
      ></div>
      <div
        className={`flex-1/7 border grow ${fillArray[1] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf(1) === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[2] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf(2) === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[3] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf(3) === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[4] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf(4) === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[5] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf(5) === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex-1/7 border grow ${fillArray[6] ? "bg-blue-500" : ""}`}
      >
        {fillArray.indexOf() === 0 ? (
          <>
            <div className="flex grow bg-blue-500">
              <p className="text-blue-500">continue</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex grow bg-gray-100">
              <p className="text-gray-100">continue</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
