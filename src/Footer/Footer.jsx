

const Footer = () => {


    return (
        <div className="bg-gradient-to-r from-[#F87516] to-[#5E11FF] lg:mt-24 mt-3">
           <div className="lg:flex lg:justify-between lg:px-3 p-2">
            <section>
            <section className="  ml-16 flex md:ml-72 md:py-2 gap-4 lg:hidden text-xs font-semibold text-gray-300">
                <p>Documantation</p>
               <p> Support</p>
            </section>
                <p className="text-center py-4 text-xs font-semibold text-gray-300">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            </section>

            <section className="hidden lg:flex mt-4 text-xs gap-4 font-semibold text-gray-300">
                    <p>Documentation</p>
                    <p>Support</p>
                </section>
           </div>
            
        </div>
    );
};

export default Footer;