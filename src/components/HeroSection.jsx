import { motion } from "framer-motion";

import imageProfile from "../assets/stand_logo-removebg-preview.png";
import { heroContent } from "../data/info";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, staggerChildren: 0.5 }
    },
};
const childVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    },
};
export default function HeroSection() {
    return (
        <div className="pb-4 lg:mb-36 ">
            <div className="flex flex-wrap lg:flex-row-reverse ">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8 ">
                        <motion.img
                            src={imageProfile}
                            alt="profile"
                            className="border border-stone-900 rounded-3xl "
                            width={450}
                            height={450}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl ">
                            Rahul Karmakar</motion.h2>

                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer</motion.span>

                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{heroContent}</motion.p>
                        <div className="flex gap-10">
                            <motion.a
                                variants={childVariants}
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Rahul_Karmakar_Resume.pdf"
                                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 ">Download Resume</motion.a>
                            <motion.a
                                variants={childVariants}
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 ">See Resume</motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    )
}