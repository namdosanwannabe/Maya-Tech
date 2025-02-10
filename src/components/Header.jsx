import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-b-gray-light">
            <div className="mx-auto max-w-[1168px] py-9 text-black flex justify-center">
                <nav className="flex gap-8 font-medium relative">
                    {["Home", "What we do", "Projects", "Contact"].map((item) => (
                        <div key={item} className="relative">
                            <a
                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`relative px-2 transition-all duration-300 ${active === item ? "text-black" : "text-gray-500"}`}
                                onClick={() => setActive(item)}
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
        </header>
    );
}
