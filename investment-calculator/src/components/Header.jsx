//<img src="public/investment-calculator-logo.png" alt="" />
import logo from '../assets/investment-calculator-logo.png'
export default function Header() {
    //output logo and title - add header code in index.html
    return (
        //css note . refers to a class -> could be more than one
        // # refers to a Id should be unique
        <header id="header">
            <img src={logo} alt="money icon"></img>
            <h1>Investment Calculator</h1>
        </header>
    )
}