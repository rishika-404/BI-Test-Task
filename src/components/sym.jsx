import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

function SymptomsBox() {
  return (
    <div className="flex flex-col items-center p-4 bg-blue-800 rounded-3xl ">
      <div>
        <img
          src="https://img.freepik.com/free-vector/young-female-with-symptoms-coughing_23-2148486051.jpg?t=st=1709625023~exp=1709628623~hmac=25490dafca7f3603e63b592bbcf1fc72cec6258a4cc3a1d25b0f55d1e10eaf60&w=740"
          alt="symptom user"
          className="h-28 w-28 rounded-full"
        />
      </div>
      <div className="flex gap-20 justify-between">
        <div>
          <h3 className="text-md text-zinc-100 font-semibold flex justify-start">Symptoms</h3>
          <p className="text-xs text-zinc-200">read carefully 5 symptoms of covid 19</p>
          <p className="text-[8px] flex text-zinc-200 mt-3">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </p>
        </div>

        <div className="text-xs text-zinc-200 mt-3">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
export default SymptomsBox
