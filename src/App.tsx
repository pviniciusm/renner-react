import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./config/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <Header />
                <Home />
            </Provider>
        </>
    );
}

export default App;
