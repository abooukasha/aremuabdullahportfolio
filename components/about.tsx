"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Biochemistry, I discovered my passion for programming and
        transitioned into frontend development. I embarked on a self-taught journey, mastering modern web 
        technologies through hands-on projects and continuous learning. What excites me most about
        programming is the creative problem-solving process and the satisfaction of building solutions
        that make a real impact.
        My core stack is React, Next.js, TypeScript, and Tailwind CSS, with experience in state
        management using Zustand and Context API. I'm constantly expanding my skills and currently 
        deepening my knowledge in software testing and quality assurance to build more robust applications.
        <span className="italic">When I'm not coding</span>, I'm an avid table tennis player who enjoys the strategic gameplay and fast-paced competition.
        I also thrive on engaging in <span className="font-medium">thought-provoking discussions</span> about technology, innovation, and personal growth. 
        I believe in continuous learning both in and out of the tech world.
      </p>


    </motion.section>
  );
}
