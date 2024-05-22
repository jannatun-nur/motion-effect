import light from '../../public/light.png'
const Feature = () => {
  return (
    <div className="lg:mt-24 md:mt-24 mt-16">
      <div>
        <p className="lg:text-4xl mx-auto text-center lg:w-1/2 text-white md:text-4xl md:w-9/12 text-2xl w-10/12">
            An All-Round Plugin With Powerful Features</p>
        <p className="lg:py-10 text-center lg:w-6/12 lg:ml-80 md:w-7/12 md:ml-36 md:text-xl md:py-9 px-3 py-3">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>


        <section className='lg:flex lg:justify-between md:px-3 lg:px-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-4'>
            {/* div01 */}
            <div className="bg-[#110a23] lg:w-5/12 md:w-full rounded-2xl border border-gray-700 mx-3">
                <img src={light} alt="" />
                <p className='lg:text-2xl font-semibold lg:py-3 px-7 lg:pl-10 text-gray-200'>Light Weight</p>
                <p className=' lg:py-4 lg:px-10 px-7 py-5'>Motion Art for Elementor is designed to be lightweight.</p>

            </div>
                {/* div 02 */}
                <div className="bg-[#110a23] md:w-full lg:w-5/12 rounded-2xl border border-gray-700 mx-3">
                <img src={light} alt="" />
                <p className='lg:text-2xl font-semibold lg:py-3 px-7 lg:pl-10 text-gray-200'>Light Weight</p>
                <p className=' lg:py-4 lg:px-10 px-7 py-5'>Motion Art for Elementor is designed to be lightweight.</p>

            </div>
            {/* div 03 */}

            <div className="bg-[#110a23] md:w-8/12 lg:w-5/12 rounded-2xl border border-gray-700 mx-3">
                <img src={light} alt="" />
                <p className='lg:text-2xl font-semibold lg:py-3 px-7 lg:pl-10 text-gray-200'>Light Weight</p>
                <p className=' lg:py-4 lg:px-10 px-7 py-5'>Motion Art for Elementor is designed to be lightweight.</p>

            </div>
        </section>
      </div>
    </div>
  );
};

export default Feature;
