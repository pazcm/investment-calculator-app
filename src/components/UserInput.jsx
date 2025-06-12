//handle the user input and store it in the state

export default function UserInput({ onChangeInput, userInput }) {
    // lifted the state up to the App component function (and calculate the results there)
    // and accepted the onChangeInput prop here which will hold the function to handle input changes

    return <section id="user-input">
        <div className="input-group">
            <p>
                <lable>Initial Investment Amount</lable>
                    <input type="number" required value={userInput.initialInvestment}
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)} />
            </p>
            <p>
                <lable>Annual Investment</lable>
                    <input type="number" required value={userInput.annualInvestment}
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)}  />
            </p>
        </div>
        <div className="input-group">
            <p>
                <lable>Expected Return</lable>
                <input type="number" required value={userInput.expectedReturn}
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)}  />
            </p>
             <p>
                <lable>Investment Duration</lable>
                <input type="number" required value={userInput.investmentDuration}
                    onChange={(event) => onChangeInput('investmentDuration', event.target.value)}  />
            </p>
        </div>

    </section>
}