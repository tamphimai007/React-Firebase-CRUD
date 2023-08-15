import React, { useState } from "react";

const FormInputQuestion = () => {
  const [storyEN, setStoryEN] = useState("");
  const [storyTH, setStoryTH] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      answerOptions: [
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
      ],
    },
  ]);

  const handleStoryENChange = (text) => {
    setStoryEN(text);
  };

  const handleStoryTHChange = (text) => {
    setStoryTH(text);
  };

  const handleQuestionTextChange = (questionIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].questionText = text;
    setQuestions(updatedQuestions);
  };

  const handleQuestionOptionChange = (questionIndex, answerIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions[answerIndex].answerText = text;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions.forEach(
      (option, idx) => (option.isCorrect = idx === answerIndex)
    );
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        answerOptions: [
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
        ],
      },
    ]);
  };

  const handleSubmit = () => {
    const formData = {
      storyEN,
      storyTH,
      questions,
    };

    console.log(formData);
    // Here you can make your POST request to your API endpoint
    // using axios or any other HTTP library

    // Clear the form after submission (if desired)
    setStoryEN("");
    setStoryTH("");
    setQuestions([
      {
        questionText: "",
        answerOptions: [
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
        ],
      },
    ]);
  };

  return (
    <div>
      <div>
        <label>Story (English):</label>
        <textarea
          value={storyEN}
          onChange={(e) => handleStoryENChange(e.target.value)}
        />
      </div>
      <div>
        <label>Story (Thai):</label>
        <textarea
          value={storyTH}
          onChange={(e) => handleStoryTHChange(e.target.value)}
        />
      </div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h2>Question {questionIndex + 1}</h2>
          <input
            type="text"
            placeholder="Enter question text"
            value={question.questionText}
            onChange={(e) =>
              handleQuestionTextChange(questionIndex, e.target.value)
            }
          />
          <ul>
            {question.answerOptions.map((answerOption, answerIndex) => (
              <li key={answerIndex}>
                <input
                  type="text"
                  placeholder={`Enter answer option ${answerIndex + 1}`}
                  value={answerOption.answerText}
                  onChange={(e) =>
                    handleQuestionOptionChange(
                      questionIndex,
                      answerIndex,
                      e.target.value
                    )
                  }
                />
                <label>
                  <input
                    type="radio"
                    checked={answerOption.isCorrect}
                    onChange={() =>
                      handleCorrectAnswerChange(questionIndex, answerIndex)
                    }
                  />
                  Correct
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormInputQuestion;
