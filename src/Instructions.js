import styled from "styled-components";
import "./Instructions.css";
import {useState} from 'react';
import Questions from './questions';
import { useEffect } from "react";
const InstructionsHeader = styled.div`
  margin: 10px;
`;
const Result = styled.div`
  margin: 10px;
  color:Green;
`;

function Instructions() {
  const [isQuestionsOpen, updateQues] = useState(false);
  const [isSubmitClicked, updateSubmit] = useState(false);
  const [results, updateResult] = useState(0);
  const [answers, updateAnswers] = useState([]);
  const [quest, updateQuestionSeq] = useState(0);
  const [questionsValue, updateQuestionsValue] = useState([]);
  const displayResult=()=>{
    updateSubmit(true);
    if(answers.length>0){
      answers.map((x)=>
        {
          if(x==="correct")
          {updateResult(results+1);}
        });
  };
    
}
  useEffect(()=>{
    const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://mocki.io/v1/3d22a0b3-78a1-49df-a605-44856fb10db4');

  xhr.responseType = 'json';
  xhr.onload = function() {
    updateQuestionsValue(xhr.response);

    }
  
  xhr.send();
  },[]);

  const savedAns = (ans) =>{
    updateAnswers((prevState)=>{return [...prevState,ans]});
  }
  return (
    <>
    { !isQuestionsOpen && (<div className="IntroSection">
      <InstructionsHeader>
        <h1>Aims</h1>
        <p>
        Are you ready to test your knowledge?
        </p>
        <button onClick={()=>{updateQues(true);}}>Click to continue...</button>

      </InstructionsHeader>
     
    </div>)}
    {isQuestionsOpen && quest<questionsValue.length && <Questions questionsValue={questionsValue[quest]} savedAns={savedAns}></Questions>}
    {isQuestionsOpen && quest<questionsValue.length && quest!==questionsValue.length-1 && <div><button style={{'margin':'20px', 'border-radius':'25px','padding':'10px', 'border':'1px solid black'}}onClick={()=>{updateQuestionSeq(quest+1)}}>Next Question</button></div>}
    {isQuestionsOpen && quest===questionsValue.length-1 && <div><button style={{'margin':'20px', 'border-radius':'25px','padding':'10px', 'border':'1px solid black'}}onClick={displayResult}>Submit</button></div>}
    {isSubmitClicked && quest===questionsValue.length-1 && (<Result>You have answered {results} out of {questionsValue.length} </Result>) }
  </>
    );
}

export default Instructions;
