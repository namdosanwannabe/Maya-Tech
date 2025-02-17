import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaWordpress } from "react-icons/fa";
import { IoLogoFigma, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const ToolsDetails = [
    { Title: 'React', Icon: <FaReact /> },
    { Title: 'Python', Icon: <FaPython /> },
    { Title: 'HTML', Icon: <FaHtml5 /> },
    { Title: 'CSS', Icon: <FaCss3Alt /> },
    { Title: 'JavaScript', Icon: <IoLogoJavascript /> },
    { Title: 'Node', Icon: <IoLogoNodejs /> },
    { Title: 'Wordpress', Icon: <FaWordpress /> },
    { Title: 'Figma', Icon: <SiAdobephotoshop /> },
    { Title: 'Illustrator', Icon: <SiAdobeillustrator /> },
];

const Tools = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (title) => {
        setTitle(title);
    };

    return (
        <section className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
            <motion.div
                className="flex justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl max-w-sm text-gray-500">
                    Some tools that we use{" "}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={title}
                            className="inline-block text-black"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1 }}
                        >
                            {title}
                        </motion.span>
                    </AnimatePresence>
                </h2>
                <div className="flex items-center justify-between gap-4">
                    {ToolsDetails.map((tool, index) => (
                        <Tool
                            key={index}
                            Title={tool.Title}
                            Icon={tool.Icon}
                            onTitleChange={handleTitleChange}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

const Tool = ({ Icon, Title, onTitleChange }) => {
    const [colorOnHover, setColorOnHover] = useState('#525252');

    const handleOnHover = () => {
        setColorOnHover('#171717');
        onTitleChange(Title);
    };

    const handleOnLeave = () => {
        setColorOnHover('#525252');
        onTitleChange('');
    };

    return (
        <div
            className="flex items-center justify-center w-16 h-16 p-3 rounded-md hover:border hover:border-black transition-all duration-300 cursor-pointer"
            onMouseEnter={handleOnHover}
            onMouseLeave={handleOnLeave}
        >
            {React.cloneElement(Icon, {
                style: { color: colorOnHover, width: '32px', height: '32px' }
            })}
        </div>
    );
};

export default Tools;