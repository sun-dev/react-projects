import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment :10000,
    annualInvestment:1200,
    expectedReturn : 6,
    duration:10
})
//check valid user input
const inputIsValid = userInput.duration >=1 
function handleChange(inputId,newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputId] : +newValue
        }
    })
}
  return (
  <>
    <Header />
    <UserInput onChangeInput={handleChange} userInputState={userInput}/>
    {!inputIsValid && <p className="center">Please enter a positive duration value</p>}
    {inputIsValid && <Results input={userInput}/>}
  </>
  )
}
export default App
