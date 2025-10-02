import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeContextProvider from "./context/ThemeContextProvider";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
);
