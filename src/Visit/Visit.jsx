import stick from "../../public/stick.png";
import './style.css'



const Visit = () => {


  return (
    <div className="lg:mt-32 mt-24">
     
     <div className="lg:flex justify-between lg:px-3 md:flex md:justify-between">
     <section className="lg:w-7/12 md:w-6/12">
        <p className="text-gray-200 lg:text-4xl text-2xl text-center md:text-start md:pl-3 w-full">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
        <p className="py-6 text-center md:text-start md:pl-3">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>


        <button className="button" >Purchase from enavato</button>
      </section>

      <section className="mt-5">
        <img className="w-full" src={stick} alt="" />
      </section>
     </div>
    </div>
  );
};

export default Visit;
