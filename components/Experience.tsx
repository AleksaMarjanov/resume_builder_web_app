import React from "react";

interface Props {}

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-5 tracking-[5px]">Experience Details</h1>
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Institute/Organization"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Position"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
              <div className="mb-5">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Duration"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="guest"
              id="guest"
              placeholder="Description"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience;
