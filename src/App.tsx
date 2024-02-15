import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Home />
        </>
    );
}

export default App;
