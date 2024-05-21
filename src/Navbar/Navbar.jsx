import logo from '../../public/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#262626]">
  <div className="navbar-start">
  
    <div className='flex'>
        <img className='lg:w-10 lg:h-10' src={logo} alt="" />
        <p className='lg:text-xl'>enavto<span>market</span></p>
    </div>
  </div>
 
  
  <div className="navbar-end">
    <a className="bg-[#8fbf4c] hover:bg-[#7aa93c] shadow-[#7aa93c] text-white px-4 py-1 rounded-sm">Buy now</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;