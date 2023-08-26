import React, { useState } from 'react';
import logo from "../../assets/Jigma.io.svg";
import "./Navbar.css"; // Asegúrate de importar tu archivo CSS aquí
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [navLanding, setNavLanding] = useState(false);

    const handleNavLanding = () => {
        setNavLanding(!navLanding);
    };

    return (

        <nav className='background pb-3'>
            <div className="max-w-screen-xl mx-auto px-7 md:px-4 relative transition duration-300 ease-out">
                <div className="flex items-center justify-between p-3 xl:p-3">
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="md:hidden">
                        <GiHamburgerMenu onClick={handleNavLanding} />
                    </div>
                    <div
                        className={`${navLanding ? "translate-y-0 top-[100%] duration-500" : "translate-y-[-100%] top-0"
                            } w-full absolute left-0 mx-auto z-[100] bg-dark md:w-auto md:translate-y-0 md:relative p-3`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col items-center md:p-0 py-4 rounded-lg xl:text-lg md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-dark">
                            <li className="p-2 text-white text-base font-medium leading-snug hover:text-violet-600 transition-colors">
                                Home
                            </li>
                            <li className="p-2 text-white text-base font-medium leading-snug hover:text-violet-600 transition-colors">
                                Pricing
                            </li>
                            <li className="p-2 text-white text-base font-medium leading-snug hover:text-violet-600 transition-colors">
                                How it works
                            </li>
                            <li className="p-2 text-white text-base font-medium leading-snug hover:text-violet-600 transition-colors">
                                Use cases
                            </li>
                            <li className="p-2 text-white text-base font-medium leading-snug hover:text-violet-600 transition-colors">
                                API
                            </li>
                            <li><div className={`flex gap-5 ${navLanding ? "justify-center md:justify-end" : "justify-end"}`}>
                                <button className="px-4 py-2.5 rounded-md border border-violet-400 justify-center items-center gap-2.5 flex">
                                    <div className="text-white text-base font-semibold leading-snug">Sign in</div>
                                </button>
                                <button className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-violet-600 rounded-md border border-violet-400 justify-center items-center gap-2.5 flex">
                                    <div className="text-white text-base font-semibold leading-snug">Start for free</div>
                                </button>
                            </div></li>
                        </ul>



                    </div>

                </div>
            </div>
        </nav>



    );
};

export default Navbar;
