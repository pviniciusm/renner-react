import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { mudarPagina } from "../config/modules/paginacao.slice";

export const Paginacao = () => {
    const produtos = useAppSelector((state) => state.produtos);
    const paginacao = useAppSelector((state) => state.paginacao);
    const dispatch = useAppDispatch();

    const numPaginas = Math.ceil(produtos.length / paginacao.itensPorPagina);

    const selecionarPagina = (_: any, value: number) => {
        dispatch(mudarPagina(value));
    };

    return (
        <Pagination
            count={numPaginas}
            page={paginacao.atual}
            sx={{ alignItems: "center", display: "flex", justifyContent: "center", m: 2 }}
            onChange={selecionarPagina}
        />
    );
};
