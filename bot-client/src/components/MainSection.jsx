import React from "react";
import Typewriter from "typewriter-effect";
import { FcIdea } from "react-icons/fc";
// import Img from "../assets/chatbot.png";
import Imgs from "../assets/logo.png";

const MainSection = () => {
  return (
    <div className="mainsection">
      <div className="pgpt_heading">C²-PILS</div>
      <p className="paraheading1">.</p>
      <p className="paraheading2">.</p>
      <p className="paraheading3">.</p>
      <div className="headingcloud"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      {/* <div className="divmainpic"><img src={Img} alt="chatbot" className="mainpic" /></div> */}
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <div className="divmainpic2"><img src={Imgs} alt="chatbot2" className="mainpic2" /></div>
      <div className="typingstrings">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "A Chatbot using ChatGPT for Pharma Indusrty and Life Sciences "
              )

              .pauseFor(1000)
              .start();
          }}
        />
      </div>
      <button className="howitworks">
        How It Works <FcIdea size={20} />
      </button>
      <div class="blob"></div>
      
    </div>
  );
};

export default MainSection;
