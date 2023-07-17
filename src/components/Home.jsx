import React from "react";
import PROFILE from "../assets/PROFILE.jpeg";
// import PROFILE from "../assets/Profile.png";
import Resume from "../assets/Resume_1.pdf";
import Typical from "react-typical";
import { FaDownload } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import '../App.css';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="container justify-center  items-center py-4 mt-8">
            <p className=" text-2xl text-pink-700 mt-10 ">Hi, my name is</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6]">
              Ranjan Kumar
            </h1>
            <h2 className="text-2xl sm:text-2xl font-bold text-[#cfdaf8]">
              I'm a{" "}
              <Typical
                loop={Infinity}
                steps={[
                  "MERN Developer",
                  1200,
                  "Full Stack Developer",
                  1000,
                  "C++ Programmer",
                  1000,
                ]}
                // wrapper="p"
              />
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a Full-Stack developer and always try to build exceptional applications.
              {/* specializing in building exceptional digital experiences. */}
              Currently, I’m focused on building responsive full-stack web
              applications.
            </p>
            <div className="flex flex-row gap-4">
              <Link to="work" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
              <a href={Resume} download={Resume}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                  Get Resume
                  <span className="">
                    <FaDownload className="ml-3 " />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="image py-4 mx-auto justify-center items-center ">
            <div></div>
            <div className="p-auto">
            <img
              className="ml-10  rounded-full rounded-bl-full"
              src={PROFILE}
              alt="profile-image"
              style={{ width: "270px" }}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
