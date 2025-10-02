import logo from '../assets/money-grow-logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';

export default function Header() {
    // const themeCtx = useContext(ThemeContext);
    const { toggleTheme } = useContext(ThemeContext);


    return (
        <header id="header">
            <img src={logo} alt="Logo showing coins growing like a plant"/>
            <h1>Investment Calculator</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}
