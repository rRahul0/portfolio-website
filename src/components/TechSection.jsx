import { motion } from "framer-motion";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiHtml5, DiJava, DiJavascript1, DiPython, DiRedis } from "react-icons/di";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export default function TechSection() {
    return (
        <div className="pb-24 flex flex-col items-center ml-0 -mr-0 ">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-3xl sm:text-4xl mb-12 z-10" // Added z-10 to ensure visibility
            >
                Technologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 ml-24 -mr-28" // Removed negative margins and added padding
            >
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <DiHtml5 className="text-5xl sm:text-7xl text-red-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.9)}>
                    <DiCss3 className="text-5xl sm:text-7xl text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5.5)}>
                    <SiTailwindcss className="text-5xl sm:text-7xl text-cyan-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(7.7)}>
                    <DiJavascript1 className="text-5xl sm:text-7xl text-yellow-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                    <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
                    <SiMongodb className="text-5xl sm:text-7xl text-green-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)}>
                    <SiExpress className="text-5xl sm:text-7xl text-gray-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
                    <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                    <SiMysql className="text-5xl sm:text-7xl text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)}>
                    <DiPython className="text-5xl sm:text-7xl text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                    <DiJava className="text-5xl sm:text-7xl text-red-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(7.7)}>
                    <FaAws className="text-5xl sm:text-7xl text-yellow-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
                    <DiRedis className="text-5xl sm:text-7xl text-red-500" />
                </motion.div>
            </motion.div>
        </div>
    );
}
