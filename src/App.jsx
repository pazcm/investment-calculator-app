import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from "react"

function App() {
  // state to hold user input
 const [userInput, setUserInput]= useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 4,
      investmentDuration: 10,
  });
  // if the investment Duration is at least 1 year, the input is valid
  const inputIsValid = userInput.investmentDuration >= 1;
    
  // function to handle input changes
  // so this function is called as a prop in the UserInput component * see line 28
  function handleChange(inputId, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  return  (
    <>
      < Header />
      < UserInput userInput={userInput} onChangeInput={handleChange} />
      {/* if the input is not valid, show a message */}
      {!inputIsValid && (
        <p className="error">
          Please enter a valid duration (at least 1 year).
        </p>
      )}
      {/* if the input is valid, show the results */}
      {inputIsValid && < Results input={userInput} />}
    </>
  );
}

export default App
