import chorme from '../../public/chorme.png'
const Browser = () => {
    return (
        <div className='lg:mt-24 mt-7'>
            <div className='bg-[#130c24] lg:w-12/12 mx-4 lg:mx-4 p-10 text-xl lg:p-10 border border-gray-700  rounded-2xl '>
                <p className='text-center text-white text-2xl lg:py-5 py-5'>Supported by All Popular Browsers</p>
                <p className='lg:ml-64 md:ml-14 md:text-xl  md:w-10/12 text-center  lg:py-5 lg:w-1/2'>Rest assured, Motion Art is designed to be compatible with all major web browsers</p>
                <img className='lg:ml-96 lg:py-3 py-8 md:ml-24' src={chorme} alt="" />
            </div>
            
        </div>
    );
};

export default Browser;