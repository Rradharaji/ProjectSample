import styled from "styled-components";
import "./Instructions.css";
import "./questions.css";
import {useState} from "react";

function Questions(props) {
  const updateAnswerQuest = (event)=>{
    if(event.target.textContent===props.questionsValue.answer)
    {  props.savedAns("correct");}
  
  }
  return (

    <div className="questions">
      <h1>{props?.questionsValue?.question}</h1>
      <ul>
        <li>
      <button onClick={updateAnswerQuest}>{props?.questionsValue?.optA}</button>
      </li>
      <li>
       <button onClick={updateAnswerQuest}>{props?.questionsValue?.optB}</button>
      </li>
     <li>
       <button onClick={updateAnswerQuest}>{props?.questionsValue?.optC}</button>
     </li>
      <li>
       <button onClick={updateAnswerQuest}>{props?.questionsValue?.optD}</button>
      </li>   
      </ul>
    </div>
  );
}

export default Questions;
