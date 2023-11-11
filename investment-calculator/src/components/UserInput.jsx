//need to maintain the states of user inputs
//state - one object - each item will be a state to keep track of
//onChange - add a listener to the change event to this input field ,  define what function to execute when the change event occurs

export default function UserInput({onChangeInput,userInputState}) {    

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInputState.initialInvestment} onChange={(event)=> onChangeInput('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInputState.annualInvestment} onChange={(event) => onChangeInput('annualInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInputState.expectedReturn} onChange={(event) => onChangeInput('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInputState.duration} onChange={(event) => onChangeInput('duration',event.target.value)} />
                </p>
            </div>
        </section>
    )
}