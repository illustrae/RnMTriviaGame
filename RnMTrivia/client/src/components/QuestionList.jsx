import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

const QuestionList = () => {
    const { id } = useParams()

return (
    <div>
      <h2>Character Details</h2>
      <p>Character ID: {id}</p>
      {/* Render additional details of the character */}
    </div>
  );
};

export default QuestionList