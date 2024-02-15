import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./config/store";
import { Rodape } from "./components/Rodape";
import { CarrinhoPage } from "./pages/Carrinho";

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                {/* <CarrinhoPage /> */}
                <Home />
                <Rodape />
            </Provider>
        </>
    );
}

export default App;
