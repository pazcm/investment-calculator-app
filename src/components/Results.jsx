// This component displays the investment results in a table format.
// It will get the user input as an input here instead of the UserInput component,
// so that the results can be calculated and displayed dynamically.
// and derive the results from the input prop here (= user input state) -> computing values based on state
import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input); // it will be an of object *see util/investment.js line 7
    console.log(resultsData); // for debugging purposes
    return (
        <p>Results ... </p>        
    );
}