import chorme from "../../public/chorme.png";
const Browser = () => {
  return (
    <div className="lg:mt-24 mt-7">
      <div className="bg-[#130c24] lg:w-12/12 mx-4 lg:mx-4 p-10 text-xl lg:p-10 border border-gray-700  rounded-2xl ">

        <div className="text-center">
        <p className=" text-white md:text-2xl lg:text-3xl lg:ml-5">
          Supported by All Popular Browsers
        </p>

        <p className="text-center text-xl w-full md:text-xl lg:text-xl md:w-8/12 md:ml-28 lg:ml-72 lg:w-6/12 py-4 ">
          Rest assured, Motion Art is designed to be compatible with all major
           web browsers
        </p>
        <img className=" lg:w-5/12  lg:ml-80 lg:py-3 md:py-2 py-8 md:ml-28" src={chorme} alt="" />

        </div>
        
      </div>
    </div>
  );
};

export default Browser;


       
         