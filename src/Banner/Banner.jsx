import logo2 from "../../public/logo2.png";
const Banner = () => {
  return (
    <div className="">
      <div className="flex justify-between px-4 lg:px-3 mt-6">
        <section>
          <img className="lg:w-full w-8/12 md:w-11/12" src={logo2} alt="" />
        </section>

        <section>
          <button className="hidden lg:block font-semibold bg-white px-8 py-4 rounded-lg text-gray-800 hover:text-white hover:bg-[#1d232a] duration-700 border border-white">
            purchase Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Banner;
