import logo from '../assets/money-grow.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo showing coins growing like a plant"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}
