import React from "react";
import {Link} from "react-router-dom";
const Questions = (questtion) => {
  return (
    <div>
      <div className="display-ans-container"></div>
      <div className="display-votes-ans">
        <p>{Questions.votes}</p>
        <p>votes</p>
        <div className="display-ans-container"></div>
      <div className="display-votes-ans">
        <p>{Questions.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className = "display-question-default">
      <Link to = {'/QuestionList/${question.id()}'} className = "question.title">{question.questionTitle()}</Link>
      <div className = "display-tags-time">
      <div className = "display-tags">
        {
          question.questionTags.map((tag) =>(
            <p key = {tag}> {tag} </p>
          )
          
          )
        }
        <p className = "display-time">
          asked {question.askedOn} {question.userPosted}
        </p>
          <p className = "display-title"
      </div>

    </div>
  );
};
export default Questions;
