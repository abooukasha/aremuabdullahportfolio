import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import traceadminImg from '@/public/traceadmin.jpg';
import inventoryImg from "@/public/inventory.jpg";
import traceImg from "@/public/trace.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
  title: "Transitioned to Tech",
  location: "Lagos, Nigeria",
  description:
    "Successfully pivoted from Biochemistry to frontend development through self-directed learning. Acquired expertise in modern technologies and began my professional journey in the tech industry.",
  icon: React.createElement(LuGraduationCap),
  date: "2022",
  },
  {
     title: "Frontend Developer",
  location: "Lagos, Nigeria",
  description:
    "As a Frontend Development Intern at Tilka Technologies, I built scalable agro-tech applications using Next.js, React, and TypeScript. Developed traceability systems, inventory management platforms, and admin dashboards for supply chain optimization.",
  icon: React.createElement(CgWorkAlt),
  date: "2024 - 2025",
  },
  {
  title: "Frontend Developer & Technical Lead",
  location: "Lagos, Nigeria",
  description:
    "Currently working as a frontend developer while leading technical direction at Nexstack Tech Hub. My stack includes React, Next.js, TypeScript, and Tailwind CSS. Seeking full-time roles to build innovative solutions with modern technologies.",
  icon: React.createElement(FaReact),
  date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
  title: "Agro Traceability System",
  description:
    "Contributed to a comprehensive traceability application that tracks agro-products from farms to end-users.",
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
  imageUrl: traceadminImg,
  },
   {
  title: "Trace Admin Dashboard",
  description:
    "Created an administrative dashboard for managing traceability tracking, client relationships amongst others",
  tags: ["React", "TypeScript", "Tailwind CSS", "React Query", "Axios"],
  imageUrl: traceImg,
  },
  {
  title: "Cocoa Inventory Platform",
  description:
    "Built an enterprise inventory management system for cocoa company operations.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Context API", "Axios"],
  imageUrl: inventoryImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Zustand",
  "Git",
  "React-Query",
  "React Context",
  "Framer Motion",
  "class-variance-authority",
  "headless-ui"
] as const;
