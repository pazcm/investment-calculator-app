//handle the user input and store it in the state
import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput]= useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 4,
        investmentDuration: 10,
    });

    // Function to handle input changes
    function handleChange(inputId, newValue) {
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [inputId]: newValue
        }));
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <lable>Initial Investment Amount</lable>
                    <input type="number" required value={userInput.initialInvestment}
                    onChange={(event) => handleChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <lable>Annual Investment</lable>
                    <input type="number" required value={userInput.annualInvestment}
                    onChange={(event) => handleChange('annualInvestment', event.target.value)}  />
            </p>
        </div>
        <div className="input-group">
            <p>
                <lable>Expected Return</lable>
                <input type="number" required value={userInput.expectedReturn}
                    onChange={(event) => handleChange('expectedReturn', event.target.value)}  />
            </p>
             <p>
                <lable>Investment Duration</lable>
                <input type="number" required value={userInput.investmentDuration}
                    onChange={(event) => handleChange('investmentDuration', event.target.value)}  />
            </p>
        </div>

    </section>
}