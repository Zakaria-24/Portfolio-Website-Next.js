"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";
import aboutLottie from "../../../public/EUivLUxh0F.json"
import Lottie from "lottie-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
      
        <h3 className="text-lg font-semibold mb-2">Islamic University, Kushtia(Bangladesh)</h3>
        <p>Department of Development Studies</p>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Progammin Hero</h3>
       <Image src="/certificate.png" width={480} height={350} alt="i" />
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Lottie animationData={aboutLottie} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#ae9807] mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a <span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Front-End developer",
                1000,
                "Junior MERN Stack Developer",
                1000,
              ]}
              className="text-slate-400 font-bold"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </span> <br/>
            with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MongoDB,
            Firebase, HTML, CSS, Git, GitHub and related other technologies. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
          <hr className="mb-4" />
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;