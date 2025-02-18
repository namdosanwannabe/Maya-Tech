import { useState } from "react";
import { motion } from "framer-motion";
import UpRightArrow from "../assets/icons/up-right-arrow-icon.svg";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const handleClick = (event, item) => {
        event.preventDefault();

        const id = `#${item.toLowerCase().replace(/\s+/g, "-")}`;

        const headerOffset = 100;
        const element = document.querySelector(id);
        const elementPosition = element?.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
        });

        setActive(item);
    };


    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-b-gray-light">
            <div className="mx-auto max-w-[1168px] py-4 px-6 lg:px-8 text-black flex items-center">

                <div className="w-40">
                    <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <nav className="flex gap-8 font-medium relative">
                        {["Home", "What we do", "Projects", "Contact"].map((item) => (
                            <div key={item} className="relative">
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`relative px-2 transition-all duration-300 ${active === item ? "text-black" : "text-gray-500"}`}
                                    onClick={(e) => handleClick(e, item)}
                                >
                                    {item}
                                </a>
                                {active === item && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 h-[2px] w-full bg-black"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <button type="button" className="cta-btn h-[45px] gap-2 flex items-center py-3 px-6 rounded-full bg-gray-lighter text-black font-medium hover:bg-gray-light/75 transition duration-300 ease">
                    <span>Book a call</span>
                    <img src={UpRightArrow} alt="Arrow Icon" />
                </button>
            </div>
        </header>
    );
}
