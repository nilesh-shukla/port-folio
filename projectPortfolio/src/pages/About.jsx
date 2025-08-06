import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Experience from "../components/Experience";
import Stack from "../components/Stack";
import Button from "../components/Button";
import FAQ from "../components/FAQ";

import aboutImg from "../assets/aboutImg.avif"
import interImg from "../assets/interImg.avif"
import Collab from "../assets/gcollab.webp"
import JS from "../assets/JS.webp"
import Discord from "../assets/discord.jpeg"
import Gpay from "../assets/gpay.png"
import LIn from "../assets/linked.avif"
import GitHub from "../assets/github.png"

function About() {
  return (
    <>
      <motion.div
        className="font-isans"
      >

        <div className="p-45 font-isans">
          <h1 className="text-[2.6em] tracking-tighter leading-12 mb-12"><span className="text-gray-500">Nilesh Shukla blends data-driven insights,<br /> and dynamic experiences</span> to build intelligent <br /> and impactful digital solutions</h1>

          <div className="flex gap-2">

            <div className="relative group w-[38%] h-[55vh] bg-[#f4f4f4] p-5 rounded-4xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-300 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out z-20"/>
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20"/>
              {/* People */}
              <div className="flex flex-col group-hover:-translate-y-85 gap-3 transition-all duration-500 ease-in-out">
                <div className="flex flex-col gap-3 bg-white p-3 rounded-2xl z-10">
                  <div className="flex gap-2 items-center">
                    <img src={interImg} alt="image1" className="w-[8%] mr-1 rounded-lg" />
                    <h1>Sarah T</h1>
                    <FontAwesomeIcon icon={faCircle} className="text-[4px] text-[#9e9e9e]"/>
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>Founder of NovaTech</h1>
                  </div>
                  <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>"Working with Nilesh was a game-changer for our product. His ability to merge strategy with stunning visuals made our platform not only beautiful but incredibly user-friendly"</p>
                </div>
                <div className="flex flex-col gap-3 bg-white p-3 rounded-2xl z-10">
                  <div className="flex gap-2 items-center">
                    <img src={interImg} alt="image2" className="w-[8%] mr-1rounded-lg" />
                    <h1>David Reynolds</h1>
                    <FontAwesomeIcon icon={faCircle} className="text-[4px] text-[#9e9e9e]"/>
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>CEO of Horizon</h1>
                  </div>
                  <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>"Nilesh took our vision and transformed it into a seamless digital experience. His attention to detail and design expertise elevated our brand beyond expectations."</p>
                </div>
                <div className="flex flex-col gap-3 bg-white p-3 rounded-2xl z-10">
                  <div className="flex gap-2 items-center">
                    <img src={interImg} alt="image3" className="w-[8%] mr-1 rounded-lg" />
                    <h1>James Miller</h1>
                    <FontAwesomeIcon icon={faCircle} className="text-[4px] text-[#9e9e9e]"/>
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>Marketing Direcor at Planza</h1>
                  </div>
                  <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>"Nilesh's branding work gave our startup a distinct identity that truly resonates with our audience. His designs are not only visually compelling but strategically impactful."</p>
                </div>
                <div className="flex flex-col gap-3 bg-white p-3 rounded-2xl z-10">
                  <div className="flex gap-2 items-center">
                    <img src={interImg} alt="image4" className="w-[8%] mr-1 rounded-lg" />
                    <h1>Roysid Qoim</h1>
                    <FontAwesomeIcon icon={faCircle} className="text-[4px] text-[#9e9e9e]"/>
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>Founder of EchoWear</h1>
                  </div>
                  <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>"From concept to execution, Nilesh delivered exceptional design solutions that improved our user engagement. His creativity and professionalism make him a trusted partner."</p>
                </div>
                <div className="flex flex-col gap-3 bg-white p-3 rounded-2xl z-10">
                  <div className="flex gap-2 items-center">
                    <img src={interImg} alt="image5" className="w-[8%] mr-1 rounded-lg" />
                    <h1>Emily Foster</h1>
                    <FontAwesomeIcon icon={faCircle} className="text-[4px] text-[#9e9e9e]"/>
                    <h1 className="text-[#878787] tracking-normal" style={{fontWeight: 200}}>Product Head at VeroBank</h1>
                  </div>
                  <p className="leading-5 text-[#444444]" style={{fontWeight: 200}}>"Nilesh doesn’t just design; he solves problems. His strategic approach and design thinking helped us create an intuitive, high-performing fintech platform."</p>
                </div>
              </div>
            </div>

            <div className="w-[62%] rounded-4xl">
              <img src={aboutImg} alt="" className="rounded-4xl h-full object-cover"/>
            </div>

          </div>
        </div>

        {/* Describing Myself */}
        <div className="flex px-45">
          <div className="w-[38%]">
            <h1 className="text-gray-600 text-xl">About Me</h1>
          </div>
            <div className="w-[62%]">
            <h1 className="text-4xl">I blend strategic thinking with visual clarity to create digital products that are both beautiful and effective</h1><br />
            <p className="text-xl tracking-tighter leading-tight text-[#6d6d6d] ">As a technology-driven problem solver, my focus is on building intelligent digital solutions through clean interfaces, responsive interactions, and data-informed systems that elevate usability and performance. Whether it’s developing ML-based models, crafting interactive dashboards, or engineering scalable ReactJS applications, my approach combines design thinking with technical depth to align user needs with business outcomes.</p>
              <br />
            <p className="text-xl tracking-tighter leading-tight text-[#6d6d6d]">Over the years, I’ve worked with early-stage startups, product teams, and solo founders to bring ideas to life through strategic engineering and thoughtful UI development. I believe great products emerge from the synergy of design and data—where simplicity meets precision and creativity is backed by insight. From understanding user behavior to deploying robust systems, I ensure every project is built with clarity, efficiency, and purpose.</p>
          </div>
        </div>

        <div className="p-45">
          <h1 className="text-black tracking-tight text-4xl mb-10">Coding Experiences</h1>
          <div className="flex flex-col gap-2">
            <Experience className="bg-[#7430F7] shadow-box z-50" textColor="text-white" expColor={"text-white"} exp="React Development" language="ReactJS" time="2024-Present" />
            <Experience className="bg-[#f4f4f4] z-10" textColor="text-[#979797]" exp="Machine Learning" language="Python" time="2023-24" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="JavaScript Development" language="JavaScript" time="2021-23" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="FrontEnd Developement" language="HTML and CSS" time="2020-21" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="Java Development" language="JAVA" time="2019-20" />
          </div>
        </div>

        <div className="px-45">
          <h1 className="text-black tracking-tight text-4xl mb-10">My stacks</h1>
          <div className="grid grid-rows-3 grid-cols-2 gap-2">
            <Stack className="bg-[#7430F7] shadow-box z-50" textColor="text-white" titleColor="text-white" image={Collab} title="Google Collab" description="My space to explore bold, experimental ideas" />
            <Stack className="bg-[#f7f7f7] z-10" textColor="text-[#979797]" image={Gpay} title="GPay" description="A smooth and secure solution for digital payments" />
            <Stack className="bg-[#f7f7f7] z-10" textColor="text-[#979797]" image={JS} title="Javascript" description="Powering the modern web with logic and interactivity" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={Discord} title="Discord" description="Where I share insights, tips, and Framer resources" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={LIn} title="LinkedIn" description="The easiest way to hire me and collaborate on projects" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={GitHub} title="GitHub" description="The place where I build and ship code together" />
          </div>
        </div>

        <div className="flex p-45 gap-10">
            <div className="font-isans flex flex-col w-1/2">
                <div className="flex items-center overflow-hidden">
                <h1 className="text-xl text-gray-500 mb-2 mr-2">FAQs</h1><hr className="w-full text-[#e4e4e4]" />
                </div>
                <p className="text-4xl mb-8"><span className="text-gray-500">Answers to common questions to help you understand</span> the process and how we can work together</p>
                <Button buttonName="Email Me" className="hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3 w-30" />
            </div>
            <div className="bg-gray-100 w-1/2 rounded-2xl p-3 flex flex-col gap-5">
                <div className="flex justify-center items-center">
                <button className="w-40 tracking-tight font-isans shadow-box rounded-2xl bg-black text-white py-2">I'm here to help you</button>
                </div>
                <div className="flex flex-col gap-3">
                <FAQ solution={"The timeline depends on the project’s scope and complexity. Branding and UI/UX projects usually take 2–6 weeks, while Framer website development can range from 1–4 weeks. I’ll provide a detailed timeline after the project brief"}>What's your typical project timeline?</FAQ>
                <FAQ solution={"Yes! I believe in collaboration and refining the work to match your vision. Each project includes a set number of revision rounds, which we’ll define in the project scope"}>How do you handle revisions?</FAQ>
                <FAQ solution={"I strive to ensure that all clients are satisfied with the final result. If you’re not happy, I’ll work with you to make it right."}>What if I'm not satisfied with the final result?</FAQ>
                <FAQ solution={"Absolutely! If you already have brand guidelines, I’ll ensure the designs align with your established identity while still bringing fresh creativity to the project"}>Can you work with my existing brand guidelines?</FAQ>
                <FAQ solution={"Yes, I provide one month of post-project support to address any questions or minor adjustments you may need."}>Do you provide post-project support?</FAQ>
                <FAQ solution={"The best way to reach me is via email or through the contact form on my website. I aim to respond within 24 hours."}>What’s the best way to reach you?</FAQ>
                </div>
            </div>
        </div>
        
      </motion.div>
    </>
  )
}

export default About