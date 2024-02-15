import { Button, Card, CardActions, CardContent, CardMedia, Typography, styled } from "@mui/material";

export const ProdutoStyled = styled(Card)`
    margin: 8px 4px;
`;

export const CardProduto = () => {
    return (
        <ProdutoStyled>
            <CardMedia
                component="img"
                height="194"
                image="https://static3.tcdn.com.br/629771/themes/121/img/pages/atacado/tenis-atacado.png"
            ></CardMedia>
            <CardContent>
                <Typography variant="h5" fontWeight="bold">
                    Tenis Azul Nike
                </Typography>
                <Typography variant="body1">R$ 79,90</Typography>
                <Typography variant="caption">3x R4 24,90</Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Adicionar ao carrinho</Button>
            </CardActions>
        </ProdutoStyled>
    );
};
