import { Pagination } from "@mui/material";

export const Paginacao = () => {
    const listaItens = [];
    const itensPorPagina = 5;
    let paginas = Math.ceil(listaItens.length / itensPorPagina);
    if (paginas <= 0) {
        paginas = 1;
    }

    return (
        <Pagination count={paginas} sx={{ alignItems: "center", display: "flex", justifyContent: "center", m: 2 }} />
    );
};
