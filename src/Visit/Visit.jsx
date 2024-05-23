import stick from "../../public/stick.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Visit = () => {
  return (
    <div className="lg:mt-32 mt-24">
      <div className="lg:flex justify-between lg:px-3 md:flex md:justify-between">
        <section className="lg:w-7/12 md:w-6/12">
          <p className="text-gray-200 lg:text-4xl text-2xl text-center md:text-start  mx-6 w-10/12 lg:w-full">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </p>
          <p className="py-6 text-center md:text-start md:pl-6 px-3">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>

          <div className="md:ml-5 md:py-4 md:pt-3  px-4 lg:px-10 lg:py-4 py-3  md:text-xl md:w-9/12 text-2xl text-white flex md:gap-3 bg-gradient-to-r from-[#5E11FF] to-[#F87516] w-11/12 mx-auto rounded-2xl lg:w-6/12">
            <button className="flex ">
              Purchase from Envato
              <span className="md:mt-1 -mt-1 lg:-mt-1 text-white text-4xl md:text-2xl lg:text-4xl ml-2">
                <LiaLongArrowAltRightSolid />
              </span>
            </button>
          </div>
        </section>

        <section className="mt-5">
          <img className="w-full p-10 lg:p-0 md:p-4" src={stick} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Visit;
