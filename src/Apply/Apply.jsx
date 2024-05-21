import page from '../../public/page.png'
import section from '../../public/sec.png'

const Apply = () => {
    return (
        <div className="mt-24">
            <div>
                <p className=" text-white font-semibold text-3xl lg:text-4xl text-center w-full lg:w-1/2 mx-auto my-16">Apply On Any Section Or Enable For Whole Page</p>


                <div className='lg:flex lg:justify-between lg:px-4 px-3 gap-5 md:flex md:justify-between'>
                    {/* sec 01 */}
                    <section className="lg:w-8/12 bg-[#0e0720] lg:h-full rounded-2xl border border-gray-700 ">
                        <p className='lg:text-2xl pt-10 pl-6'>Apply On Section</p>
                        <p className='py-5 pl-6'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                        <img className='lg:w-10/12 mx-auto w-11/12 ' src={section} alt="" />
                    </section>




                    <section className="lg:w-8/12 bg-[#0e0720] lg:h-full rounded-2xl border border-gray-700 mt-4 lg:mt-24 md:mt-16">
                        <p className='lg:text-2xl pt-10 pl-6'>Apply On Section</p>
                        <p className='py-5 pl-6'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                        <img className='lg:w-10/12 mx-auto w-11/12 ' src={page} alt="" />
                    </section>

                 
                </div>
            </div>
            
        </div>
    );
};

export default Apply;