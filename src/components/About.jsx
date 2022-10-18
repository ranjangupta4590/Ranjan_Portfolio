import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <hr className="max-w-[1200px] mx-auto  flex  border-gray-100 dark:bg-gray-700 "></hr>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ranjan Kumar,
            </p>
            <p className="sm:text-right text-3xl"> Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent application that improves
              the lives of those around me.
            </p>
            <p>
              {" "}
              I have been a consistent and promising performer both in
              competitive programming as well as Web development with good
              first-hand experience in development. I have skilled practical
              knowledge of front-end development. I have a very flexible way of
              learning and I am open to learning new fields as per the
              requirements of industry.
              My strength is that,I can easily shape myself according to the industrial environment.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
