import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Paginacao } from "../../models/paginacao.model";

const initialState: Paginacao = {
    atual: 1,
    itensPorPagina: 2,
};

const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState,
    reducers: {
        // payload => a pagina que eu quero ir
        mudarPagina: (state, action: PayloadAction<number>) => {
            return {
                atual: action.payload,
                itensPorPagina: state.itensPorPagina,
            };
        },
    },
});

export default paginacaoSlice.reducer;

export const { mudarPagina } = paginacaoSlice.actions;
