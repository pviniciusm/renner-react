import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./config/store";
import { Rodape } from "./components/Rodape";

function App() {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <Header />
                <Home />
                <Rodape />
            </Provider>
        </>
    );
}

export default App;
