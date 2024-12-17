import { delay } from "framer-motion";
import {
  Activity,
  EmojiHappy,
  Global,
  Hierarchy,
  I24Support,
  MobileProgramming,
  Monitor,
} from "iconsax-react";
import React from "react";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Web development",
    link: "#",
    icon: <Global size={33} />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile development",
    link: "#",
    icon: <MobileProgramming size={33} />,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Software development",
    link: "#",
    icon: <Monitor size={33} />,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Satisfied clients",
    link: "#",
    icon: <EmojiHappy size={33} />,
    delay: 0.8,
  },
  {
    id: 5,
    title: "SEO Optimization",
    link: "#",
    icon: <Activity size={33} />,
    delay: 1,
  },
  {
    id: 6,
    title: "24/7 Support",
    link: "#",
    icon: <I24Support size={33} />,
    delay: 1.2,
  },
];

const SLideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SLideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center py-7 p-4 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-xl mb-4 ">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
