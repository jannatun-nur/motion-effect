import "./style.css";
const Advertise = () => {
  return (
    <div className="mt-44">
      {/* For dakstop*/}

      <div className="lg:flex lg:justify-items-start md:flex md:justify-items-start md:gap-10 columns-1">
        {/* 01 */}
        <section className="lg:ml-6 md:ml-3 ml-16 text-center md:text-start lg:text-start">
          <p className="w-9/12 lg:w-8/12 text-transparent bg-clip-text bg-gradient-to-r from-[#fc6d3f] to-[#7b42f6] text-xl font-semibold">
            Trnasform Your Website
          </p>
          <p className="mr-10 py-4 text-gray-200 font-medium lg:w-1/2">With Motion Art Effect</p>
        </section>

        {/* sec 02 */}
        <section className=" lg:w-9/12 w-full">
          <p className="font-semibold text-gray-100 w-full text-4xl text-center lg:w-9/12 lg:text-6xl md:text-start lg:text-start md:text-4xl md:w-8/12 ">
            Attract Your Visitors Attention With Colorful
          </p>
          <p className="text-4xl w-9/12 mx-auto md:mx-0 md:ml-4 pt-4 text-center md:text-start lg:text-6xl md:text-4xl md:pt-4 pb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#fc6d3f] to-[#7b42f6]">
            Motion Art Effect
          </p>


          <p className="lg:w-9/12 md:w-7/12 text-center lg:text-start md:text-start ">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Advertise;
