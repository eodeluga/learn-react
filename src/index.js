import ReactDOM from "react-dom/client";
import App from './App';
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
        <App />
    </FavoritesContextProvider>
);