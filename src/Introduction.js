import styled from "styled-components";
import "./Introduction.css";
import { Link } from "react-router-dom";
const IntroductionHeader = styled.div`
  margin: 10px;
`;
const IntroductionContent = styled.div`
  ul li{
    text-align: left;
  }
  button{
    background-color: black;
    color: #fff;
    margin-left:20px;
    margin-top:50px;
    border-radius: 25px;
    padding: 10px;
    border: 1px solid transparent;
  }
`;
function Introduction() {
  return (
    <div className="IntroSection">
      <IntroductionHeader>
        <h1>Aims</h1>
        <p>
          This module aims to inform the reader about effective teamwork and
          communication that can lead to patient safety and enhanced quality
          care. The behaviours required for effective teamwork, the key elements
          of effective communication, and common tools that support successful
          communication within a team are discussed.
        </p>
      </IntroductionHeader>
      <IntroductionContent>
     <ul>
         <li>
             Explain the pivotal role of effective teamwork in promoting patient safety and therefore quality care.
         </li>
         <li>
         Describe the behaviours that are required for effective teamwork.
         </li>
         <li>
         List the barriers to effective communication in healthcare.
         </li>
         <li>
          Describe common tools that can be used to improve team communication.
         </li>
         <li>
         List the barriers to effective communication in healthcare.
         </li>
         <li>
         Describe common tools that can be used to improve team communication.
         </li>
         <li>
         Relate effective communication to your own practice.
         </li>
         <li>
         Develop your communication skills in your team environment.
         </li>
     </ul>
     <Link to="/instructions"><button>Click to continue...</button></Link>
      </IntroductionContent>
    </div>
  );
}

export default Introduction;
