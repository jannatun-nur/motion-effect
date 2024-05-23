import page from "../../public/page.png";
import section from "../../public/sec.png";

const Apply = () => {
  return (
    <div className="lg:mt-24 md:mt-28">
      <div>
        <p className=" text-gray-200 text-2xl lg:text-4xl md:text-2xl md:font-semibold text-center w-11/12 lg:w-1/2 md:w-1/2 mx-auto my-16">
          Apply On Any Section Or Enable For Whole Page
        </p>
 

        <div className="lg:flex lg:justify-between lg:px-4 px-3 gap-5 md:flex md:justify-between">
          {/* sec 01 */}
          <section className="lg:w-8/12 bg-[#0e0720] md:w-6/12  rounded-2xl border border-gray-700 md:p-5 pb-6 lg:mb-14 md:mb-16">
            <p className="text-2xl pt-10 pl-6 text-center text-gray-200">Apply On Section</p>
            <p className="py-5 pl-6 text-center px-2">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.{" "}
            </p>
            <img className="lg:w-11/12 mx-auto md:w-11/12 w-10/12" src={section} alt="" />
          </section>



          

          <section className="lg:w-8/12 bg-[#0e0720]  md:w-6/12 lg:h-full rounded-2xl border border-gray-700 md:p-5 md:mt-16 mt-3">
            <p className="text-2xl pt-10 pl-6 text-center text-gray-200">Apply On page</p>
            <p className="py-5 pl-6 text-center px-2">
            Take your website to new heights with Motion Art for Elementor.
            <br/> Embrace the power of motion and animation.{" "}
            </p>
            <img className="lg:w-10/12 mx-auto w-10/12 mb-6" src={page} alt="" />
          </section>

        </div>
      </div>
    </div>
  );
};

export default Apply;
