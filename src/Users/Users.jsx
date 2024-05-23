import logo1 from '../../public/logo.png'
import logo2 from '../../public/g.png'
import logo3 from '../../public/w.png'
import star from '../../public/5star.png'

const Users = () => {
    return (
        <div className=' '>
            <p className=" my-20 text-center  text-gray-200 lg:text-2xl px-3 text-2xl">Trusted by thousands of users around the world</p>
           

            <div className=' grid grid-cols-1 px-6 gap-10 md:flex md:justify-around lg:flex lg:px-3 lg:justify-around'>
                {/* sec 01 */}
                <section className='flex gap-3 '>
                    <div>
                    <img src={logo1} alt="" />
                    </div>
                    <div className='mt-4 '>
                    <img src={star}  alt="" />
                    <p className='pt-4'>4.5 Score, 9 Reviews</p>
                    </div>
                </section>


                {/* sec 02 */}
                <section className='flex gap-3 '>
                    <div>
                    <img src={logo2} alt="" />
                    </div>
                    <div className='mt-4 '>
                        <img src={star}  alt="" />
                        <p className='pt-4'>4.5 Score, 9 Reviews</p>
                    </div>
                </section>


                {/* sec 03 */}
                <section className='lg:flex gap-3 md:hidden flex'>
                    <div>
                    <img src={logo3}  alt="" />
                    </div>

                    <div className='mt-4 '>
                    <img src={star}  alt="" />
                    <p className='pt-4'>4.5 Score, 9 Reviews</p>
                    </div>
                </section>
                
            </div>

            <div className='hidden lg:hidden md:block'> 
            <section className='flex gap-3 ml-64 mt-10'>
                    <div>
                    <img src={logo3} alt="" />
                    </div>

                    <div className='mt-4 '>
                    <img src={star} alt="" />
                    <p className='pt-4'>4.5 Score, 9 Reviews</p>
                    </div>
                </section>
            </div>

            
            
        </div>
    );
};

export default Users;