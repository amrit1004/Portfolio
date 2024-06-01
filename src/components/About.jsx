import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am Amrit Singhal, currently pursuing a BTech at Panjab University with a strong focus on full-stack development. I have mastered technologies such as MERN stack and Next.js, and I continuously enhance my coding skills by delving deep into data structures and algorithms, making me proficient and competitive in my field.
        </p>

        <br />

        <p className="text-xl">
        I have built several detailed and impressive projects, including a fully functional real estate website that demonstrates my practical skills in development. My dedication to learning and my innovative approach to problem-solving establish me as a promising talent poised to make significant contributions to the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;