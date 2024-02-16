import { Grid } from "@mui/material";
import { CardProduto } from "./CardProduto";
import { useAppSelector } from "../config/hooks";

export const ProdutosList = () => {
    const produtos = useAppSelector((state) => state.produtos);
    const paginacao = useAppSelector((state) => state.paginacao);

    const posInicial = paginacao.itensPorPagina * (paginacao.atual - 1);
    const posFinal = posInicial + paginacao.itensPorPagina;

    return (
        <div>
            <Grid container>
                {produtos.slice(posInicial, posFinal).map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CardProduto produto={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
