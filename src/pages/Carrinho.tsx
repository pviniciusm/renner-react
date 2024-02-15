import { Button, Card, Container, Divider } from "@mui/material";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";

export const CarrinhoPage = () => {
    return (
        <Container>
            <br />
            <h1>Meu carrinho</h1>
            <Card>
                <CarrinhoProduto />
                <CarrinhoProduto />
                <CarrinhoProduto />
            </Card>

            <Card sx={{ mt: 2, p: 2 }}>
                <p>Subtotal: R$ 139,90</p>
                <p>Frete: GRÁTIS</p>
                <Divider />
                <p>Total: R$ 139,00</p>
                <p>12x de R$ 9,90 s/juros</p>
            </Card>
            <br />
            <div>
                <Button variant="contained" color="success" fullWidth>
                    <ShoppingCartCheckoutOutlined sx={{ mr: 1 }} />
                    <span>Finalizar compra</span>
                </Button>
            </div>
            <br />
        </Container>
    );
};
