import { Box } from "@mui/material";
import { CarrinhoItem } from "../models/carrinho.model";

interface CarrinhoProdutoProps {
    item: CarrinhoItem;
}

export const CarrinhoProduto = (props: CarrinhoProdutoProps) => {
    return (
        <Box sx={{ p: 2 }}>
            <Box display={"flex"} alignItems={"center"}>
                <div>
                    <img src={props.item.produto.imgUrl} alt="" width="80" />
                </div>
                <Box flex={1}>
                    <p>Nome: {props.item.produto.nome}</p>
                    <p>Valor: R$ {props.item.produto.valor.toFixed(2)}</p>
                    <p>Quantidade: {props.item.quantidade}</p>
                </Box>
            </Box>
        </Box>
    );
};
