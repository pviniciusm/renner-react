import { Grid } from "@mui/material";
import { CardProduto } from "./CardProduto";

export const ProdutosList = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CardProduto />
                </Grid>
            </Grid>
        </div>
    );
};
