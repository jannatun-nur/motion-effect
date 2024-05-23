import logo from '../../public/loogo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#262626]">
  <div className="navbar-start">
  
    <div className='flex'>
        <img className='lg:w-5 lg:h-5 mt-1' src={logo} alt="" />
        <p className='lg:text-xl text-white'>enavto<span className='text-[#7aa93c] font-outfit'>market</span></p>
    </div>
  </div>
 
  
  <div className="navbar-end">
    <a className="bg-[#8fbf4c] hover:bg-[#7aa93c] shadow-[#7aa93c] text-white px-3 py-1 rounded-sm">Buy now</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;