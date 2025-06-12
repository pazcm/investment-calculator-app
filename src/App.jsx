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

  // function to handle input changes
  // so this function is called as a prop in the UserInput component * see line 28
  function handleChange(inputId, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputId]: newValue,
      };
    });
  }

  return  (
    <>
      < Header />
      < UserInput userInput={userInput} onChangeInput={handleChange} />
      {/* results table goes here */}
      < Results input={userInput} />
    </>
  );
}

export default App
